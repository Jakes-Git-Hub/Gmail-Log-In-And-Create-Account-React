import { useEffect } from 'react';

const useHandleWrongCredentials = (isWrongCredentials, phoneNumberOrEmailInput, error) => {
    useEffect(() => {
        if (isWrongCredentials) {
            error('wrongCredentials');
            if (phoneNumberOrEmailInput && phoneNumberOrEmailInput.current) {
                phoneNumberOrEmailInput.current.focus();
            }
        }
    }, [isWrongCredentials, phoneNumberOrEmailInput, error]);
}

export default useHandleWrongCredentials;