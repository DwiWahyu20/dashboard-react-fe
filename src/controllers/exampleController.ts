import api from '../services/api';

export const fetchExampleData = async () => {
  try {
    const response = await api.get('/example-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching example data:', error);
    throw error;
  }
};