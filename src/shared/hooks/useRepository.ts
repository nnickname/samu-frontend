import axios, { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

if (!BASE_URL) {
  throw new Error('REACT_APP_API_URL no está definida en las variables de entorno');
}

// Add better typing for API errors
interface ApiError {
  message: string;
  status?: number;
}

interface UseRepositoryResponse {
  get: <T>(endpoint: string) => Promise<T>;
  post: <T>(endpoint: string, data: unknown) => Promise<T>; // Changed 'any' to 'unknown' for better type safety
}

export const useRepository = (): UseRepositoryResponse => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const handleError = (error: unknown): never => {
    const apiError: ApiError = {
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      status: axios.isAxiosError(error) ? error.response?.status : undefined,
    };
    console.error('API Error:', apiError);
    throw apiError;
  };

  const get = async <T>(endpoint: string): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  };

  const post = async <T>(endpoint: string, data: unknown): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  };

  return {
    get,
    post,
  };
};
