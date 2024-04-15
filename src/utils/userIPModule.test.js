import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import { useUserIP } from './userIPModule';

jest.mock('axios');

describe('useUserIP', () => {
  it('fetches user IP and sets loading state correctly', async () => {
    const mockIP = '192.168.1.1';
    axios.get.mockResolvedValueOnce({ data: { userIpAddress: mockIP } });

    const { result } = renderHook(() => useUserIP());

    expect(result.current.isLoading).toBe(true);

    await act(async () => { }); // Advance the state of the hook

    expect(result.current.userIP).toBe(mockIP);
    expect(result.current.isLoading).toBe(false);
  });

  it('handles error and sets loading state correctly', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useUserIP());

    expect(result.current.isLoading).toBe(true);

    await act(async () => { }); // Advance the state of the hook

    expect(result.current.userIP).toBe('');
    expect(result.current.isLoading).toBe(false);
  });
});
