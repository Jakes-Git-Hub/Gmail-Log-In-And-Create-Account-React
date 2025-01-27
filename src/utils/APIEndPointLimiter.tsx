import RateLimit from 'axios-rate-limit';
import axios from 'axios';

const baseURL: string | undefined = process.env.REACT_APP_API_BASE_URL;

interface LimiterOptions {
    maxRequests: number;
    perMilliseconds: number;
}

export const APIEndPointLimiter = ({ maxRequests, perMilliseconds }: LimiterOptions) => {
    const axiosInstance = axios.create({
        baseURL,
    });

    console.log(axiosInstance);
    console.log(baseURL);

    const limiter = RateLimit(axiosInstance, { maxRequests, perMilliseconds });

    return limiter;
};