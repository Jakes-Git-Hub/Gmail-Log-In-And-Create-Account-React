import RateLimit from 'axios-rate-limit';
import axios from 'axios';

const baseURL = 'http://localhost:3001'; // Replace with your actual base URL

export const APIEndPointLimiter = (maxRequests, windowMs) => {
    const axiosInstance = axios.create({
        baseURL,
    });

    console.log(axiosInstance);

    const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });

    return limiter;
};