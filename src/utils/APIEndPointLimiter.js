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

export const APIEndPointLimiter = async (maxRequests, windowMs) => {
  const baseURL = await fetchApiBaseUrl();
  const axiosInstance = axios.create({ baseURL });
  const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });
  return limiter;
};