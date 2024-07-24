import RateLimit from 'axios-rate-limit';
import axios from 'axios';

const fetchApiBaseUrl = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/secrets');
    const data = await response.json();
    const baseUrl = data.REACT_APP_API_BASE_URL_LOCAL;
    console.log('baseUrl:', baseUrl); // For debugging
    return baseUrl;
  } catch (error) {
    console.error('Error fetching API base URL:', error);
    throw error; // Re-throw the error for proper handling
  }
};

<<<<<<< HEAD
export const APIEndPointLimiter = (maxRequests, windowMs) => {
    const axiosInstance = axios.create({
        baseURL,
    });

    console.log(axiosInstance);
    console.log(baseURL);

    const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });

    return limiter;
=======
export const APIEndPointLimiter = async (maxRequests, windowMs) => {
  const baseURL = await fetchApiBaseUrl();
  const axiosInstance = axios.create({ baseURL });
  const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });
  return limiter;
>>>>>>> f3bcb13114127833ed8b4f5d4686d211e4d25713
};