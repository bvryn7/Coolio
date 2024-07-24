
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Base URL for your Django backend's API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;