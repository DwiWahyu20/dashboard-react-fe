
import { fetchData, postData } from 'app/(services)/apiService';

interface ControllerResponse<T> {
  data: T;
}

export const forwardResponse = async <T>(): Promise<T> => {
    var result;
    try {
        const response: ControllerResponse<T> = await fetchData('/cors');
        result =  response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    return result;
};