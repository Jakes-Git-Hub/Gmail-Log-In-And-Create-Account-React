import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import RateLimit from 'axios-rate-limit';

jest.mock('axios-rate-limit');

describe('APIEndPointLimiter', () => {
  it('should return a rate-limited axios instance', () => {
    const mockAxios = new MockAdapter(axios);
    const data = { response: true };
    mockAxios.onGet('/').reply(200, data);

    RateLimit.mockImplementation((axiosInstance, options) => {
      return axiosInstance;
    });

    const baseURL = 'http://localhost:3001';

    const APIEndPointLimiter = (maxRequests, windowMs) => {
      const axiosInstance = axios.create({
        baseURL,
      });

      const limiter = RateLimit(axiosInstance, { maxRequests, windowMs });

      return limiter;
    };

    const limiter = APIEndPointLimiter(5, 1000);
    return limiter.get('/').then(response => {
      expect(response.data).toEqual(data);
    });
  });
});