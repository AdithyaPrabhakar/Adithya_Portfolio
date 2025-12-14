import axios from 'axios';

// Vite uses import.meta.env, not process.env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorMessage = error.response?.data?.message || 
                        error.response?.data?.error || 
                        error.message ||
                        'Network error. Please check your connection.';
    console.error('API Error:', errorMessage);
    throw new Error(errorMessage);
  }
);

export const portfolioService = {
  submitContact: async (contactData) => {
    try {
      const response = await api.post('/portfolio/contact', contactData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  getMessages: async () => {
    try {
      const response = await api.get('/portfolio/messages');
      return response;
    } catch (error) {
      throw error;
    }
  },

  checkHealth: async () => {
    try {
      const response = await api.get('/health');
      return response;
    } catch (error) {
      throw error;
    }
  }
};

export default api;