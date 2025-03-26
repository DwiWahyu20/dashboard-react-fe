import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY
  }
});

interface ApiResponse<T> {
    data: T;
}

export const callApi = async <T>(method: string, endpoint: string, filter?: string, expand?: string): Promise<T> => {
    try {
      let params = {};
      let response: ApiResponse<T> = { data: {} as T };
      if (filter) {
        params = { ...params, filter };
      }
      if (expand) {
        params = { ...params, expand };
      }
      if(method === 'GET'){
          response = await api.get(endpoint, { params });
      }
      return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// interface PostDataResponse<T> {
//     data: T;
// }

// export const postData = async <T>(endpoint: string, data: any): Promise<T> => {
//   try {
//     const response: PostDataResponse<T> = await api.post(endpoint, data);
//     return response.data;
//   } catch (error) {
//     console.error('Error posting data:', error);
//     throw error;
//   }
// };