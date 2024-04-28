import React from 'react';
import { render, waitFor } from '@testing-library/react';
import useBodyOverflow from './useBodyOverflow';

describe('useBodyOverflow', () => {
  it('sets body id to body-overflow and then resets it to body', async () => {
    const { unmount } = render(<ComponentUsingHook />);
    await waitFor(() => expect(document.body.id).toBe('body-overflow'));
    unmount();
    expect(document.body.id).toBe('body');
  });
});

const ComponentUsingHook = () => {
  useBodyOverflow();
  return null;
};