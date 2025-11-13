import axios from 'axios';
import { store } from '../store/store';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8888/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosClient.interceptors.request.use(
   (config) => {
     const token = store.getState().auth.token; // Lấy token từ Redux
     if (token) {
       config.headers['Authorization'] = `Bearer ${token}`;
     }
     return config;
   },
   (error) => Promise.reject(error)
);

export default axiosClient;