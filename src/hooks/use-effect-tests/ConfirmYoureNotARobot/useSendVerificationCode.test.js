import { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import useSendVerificationCode from './useSendVerificationCode';

describe('useSendVerificationCode', () => {
  it('calls sendVerificationCode if formattedPhoneNumber is truthy', () => {
    const sendVerificationCode = jest.fn();
    const formattedPhoneNumber = '1234567890';

    function TestComponent() {
      useSendVerificationCode(formattedPhoneNumber, sendVerificationCode);
      return null;
    }

    render(<TestComponent />);

    expect(sendVerificationCode).toHaveBeenCalled();
  });

  it('does not call sendVerificationCode if formattedPhoneNumber is falsy', () => {
    const sendVerificationCode = jest.fn();
    const formattedPhoneNumber = '';

    function TestComponent() {
      useSendVerificationCode(formattedPhoneNumber, sendVerificationCode);
      return null;
    }

    render(<TestComponent />);

    expect(sendVerificationCode).not.toHaveBeenCalled();
  });
});