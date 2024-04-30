import { render, cleanup, fireEvent } from '@testing-library/react';
import { useRef } from 'react';
import useHandleWrongCredentials from './useHandleWrongCredentials';

const error = jest.fn();

afterEach(cleanup);

function MockComponent({ isWrongCredentials }) {
  const phoneNumberOrEmailInput = useRef();

  useHandleWrongCredentials(isWrongCredentials, phoneNumberOrEmailInput, error);

  return <input ref={phoneNumberOrEmailInput} />;
}

test('useHandleWrongCredentials calls error and focus when isWrongCredentials is true', () => {
  const { rerender, getByRole } = render(<MockComponent isWrongCredentials={false} />);
  expect(error).not.toHaveBeenCalled();

  rerender(<MockComponent isWrongCredentials={true} />);
  fireEvent.focus(getByRole('textbox'));
  expect(error).toHaveBeenCalledWith('wrongCredentials');
});