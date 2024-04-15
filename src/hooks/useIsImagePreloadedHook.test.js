import { renderHook, act } from '@testing-library/react';
import useIsImagePreloadedHook from './useIsImagePreloadedHook';

describe('useIsImagePreloadedHook', () => {
  it('should preload image and set useIsImagePreloaded to true', async () => {
    const src = 'test-image.jpg';

    // Mock Image object
    global.Image = class {
      constructor() {
        this.onload = jest.fn();
      }
      set src(value) {
        this._src = value;
        act(() => {
          setTimeout(() => this.onload(), 50);
        });
      }
      get src() {
        return this._src;
      }
    };

    const { result } = renderHook(() => useIsImagePreloadedHook(src));

    expect(result.current).toBe(false); // Initially, isImagePreload should be false

    // Wait for setTimeout to complete
    await act(() => new Promise(resolve => setTimeout(resolve, 60)));

    expect(result.current).toBe(true); // After image is loaded, isImagePreload should be true
  });
});