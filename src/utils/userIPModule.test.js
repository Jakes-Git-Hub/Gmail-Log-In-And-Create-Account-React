import { renderHook, act } from '@testing-library/react';
import axios from 'axios';
import { useUserIP } from './userIPModule'; // Assuming your custom hook file is named useUserIP.js

jest.mock('axios'); // Mocking axios module

describe('useUserIP', () => {
  test('fetches and sets user IP correctly', async () => {
    const mockUserIP = '127.0.0.1'; // Mocked user IP
    axios.get.mockResolvedValueOnce({ data: { userIpAddress: mockUserIP } }); // Mocking axios.get to return the expected data

    // Render the hook
    let result;
    await act(async () => {
      result = renderHook(() => useUserIP());
      if (result.waitForNextUpdate) {
        await result.waitForNextUpdate(); // Wait for the side effect to complete
      }
    });

    // Assert initial state
    expect(result.current.userIP).toBe(mockUserIP);
  });

  test('handles error correctly', async () => {
    const mockError = new Error('Failed to fetch user IP');
    axios.get.mockRejectedValueOnce(mockError); // Mocking axios.get to throw an error

    // Render the hook
    let result;
    await act(async () => {
      result = renderHook(() => useUserIP());
      if (result.waitForNextUpdate) {
        await result.waitForNextUpdate(); // Wait for the side effect to complete
      }
    });

    // Assert the userIP remains empty after useEffect due to error
    expect(result.current.userIP).toBe('');

    // Assert error logging
    expect(console.error).toHaveBeenCalledWith('Error fetching user IP:', mockError);
  });
});