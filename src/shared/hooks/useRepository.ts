import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  throw new Error('REACT_APP_API_URL no está definida en las variables de entorno');
}

interface UseRepositoryResponse {
  get: <T>(endpoint: string) => Promise<T>;
  post: <T>(endpoint: string, data: any) => Promise<T>;
}

export const useRepository = (): UseRepositoryResponse => {
  console.log('BASE_URL', BASE_URL);
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const get = async <T>(endpoint: string): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error en la petición GET:', error);
      throw error;
    }
  };

  const post = async <T>(endpoint: string, data: any): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error en la petición POST:', error);
      throw error;
    }
  };

  return {
    get,
    post,
  };
};
