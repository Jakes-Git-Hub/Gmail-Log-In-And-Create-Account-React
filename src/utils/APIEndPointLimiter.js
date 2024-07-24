import RateLimit from 'axios-rate-limit';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const APIEndPointLimiter = (maxRequests, windowMs) => {
    const axiosInstance = axios.create({
        baseURL,
    });

    console.log(axiosInstance);
    console.log(baseURL);

    const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });

    return limiter;
};