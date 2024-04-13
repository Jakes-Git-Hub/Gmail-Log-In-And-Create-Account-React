import { renderHook } from '@testing-library/react';
jest.mock('axios'); // Mock axios
import { useUserIP } from './useUserIP';

jest.mock('axios');

describe('useUserIP', () => {
  it('fetches user IP successfully', async () => {
    const mockResponse = { data: { userIpAddress: '127.0.0.1' } };
    axios.get.mockResolvedValue(mockResponse);

    const { result, waitForNextUpdate } = renderHook(() => useUserIP());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.userIP).toBe('127.0.0.1');
  });

  it('handles error when fetching user IP', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch user IP'));

    const { result, waitForNextUpdate } = renderHook(() => useUserIP());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.userIP).toBe('');
  });
});
