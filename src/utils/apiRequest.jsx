import axios from 'axios';

const apiRequest = axios.create({});
const apiUrl = "http://localhost:5000/api/v1";

apiRequest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        config.baseURL = apiUrl;
        config.timeout = 50000000;
        config.headers['Accept'] = '*/*'; 
        if(token) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiRequest;
