import { MockMail } from '../components/MockMailComponent';
import { useEffect } from 'react';

export const MockMailContainer = ({ loggedIn, currentLoggedInUser, userData,  }) => {

    console.log('loggedIn:', loggedIn);
    console.log('currentLoggedInUser:', currentLoggedInUser);

    // Add Overflow Body CSS

    useEffect(() => {
        document.body.id = 'body-mock-mail';
        return () => {
            document.body.id = 'body';
        };
    }, []);


    return (
        <MockMail 
            loggedIn={loggedIn}
            currentLoggedInUser={currentLoggedInUser}
            userData={userData}
        />
    )
}