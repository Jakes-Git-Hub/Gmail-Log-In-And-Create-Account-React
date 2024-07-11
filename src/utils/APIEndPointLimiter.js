import RateLimit from 'axios-rate-limit';
import axios from 'axios';

const fetchSecrets = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/secrets');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching secrets:', error);
    throw error; // Re-throw the error for proper handling
  }
};

const getApiBaseUrl = async () => {
  try {
    const data = await fetchSecrets();
    console.log('data.REACT_APP_API_BASE_URL_LOCAL', data.REACT_APP_API_BASE_URL_LOCAL);
    return data.REACT_APP_API_BASE_URL_LOCAL;
  } catch (error) {
    console.error('Error getting API base URL:', error);
    throw error; // Re-throw the error for proper handling
  }
};

export const APIEndPointLimiter = async (maxRequests, windowMs) => {
  const baseURL = await getApiBaseUrl();
  const axiosInstance = axios.create({ baseURL });
  const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });
  return limiter;
};