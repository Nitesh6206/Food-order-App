// src/Utils/api.js
import axios from 'axios';

// Create an Axios instance with the base URL of your backend
// src/Utils/api.js

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Proxy handles the base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors as previously configured



// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
