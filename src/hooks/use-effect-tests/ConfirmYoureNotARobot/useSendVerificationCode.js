import { useEffect } from 'react';

const useSendVerificationCode = (formattedPhoneNumber, sendVerificationCode) => {
    useEffect(() => {
        if (formattedPhoneNumber) {
            sendVerificationCode();
        }
    }, [formattedPhoneNumber, sendVerificationCode]);
};

export default useSendVerificationCode;