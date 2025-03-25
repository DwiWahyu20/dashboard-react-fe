import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

interface ApiResponse<T> {
    data: T;
}

export const fetchData = async <T>(endpoint: string, filter?: string, expand?: string): Promise<T> => {
    try {
      let params = {};
      if (filter) {
        params = { ...params, filter };
      }
      if (expand) {
        params = { ...params, expand };
      }
      // Dummy data response
        // const response: ApiResponse<T> = {
        //   data: {
        //     message: 'This is a dummy response'
        //   } as T
        // };
        const response: ApiResponse<T> = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

interface PostDataResponse<T> {
    data: T;
}

export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response: PostDataResponse<T> = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};