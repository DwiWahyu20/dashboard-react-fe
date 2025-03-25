
import { fetchData, postData } from 'app/(services)/apiService';

export const forwardResponse = async () => {
    try {
        const response = await fetchData('/cors');
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};