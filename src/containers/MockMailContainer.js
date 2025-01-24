import { jsx as _jsx } from "react/jsx-runtime";
import { MockMail } from '../components/MockMailComponent';
import { useEffect } from 'react';
export const MockMailContainer = ({ loggedIn, currentLoggedInUser, }) => {
    console.log('loggedIn:', loggedIn);
    console.log('currentLoggedInUser:', currentLoggedInUser);
    // Add Overflow Body CSS
    useEffect(() => {
        document.body.id = 'body-mock-mail';
        return () => {
            document.body.id = 'body';
        };
    }, []);
    return (_jsx(MockMail, { loggedIn: loggedIn, currentLoggedInUser: currentLoggedInUser }));
};
