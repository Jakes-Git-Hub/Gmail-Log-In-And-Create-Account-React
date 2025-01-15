import { MockMail } from '../components/MockMailComponent';
import React, { useEffect } from 'react';

type User = {
    id: number;
    email: string;
    password: string | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileCircleColor: string;
    day: string;
    month: string;
    year: string;
    gender: string;
    countryDetails: {
      name: string;
      abbreviation: string;
      dialingCode: string;
      svg: string;
    };
};

interface MockMailContainerProps {
    loggedIn: boolean;
    currentLoggedInUser: User | undefined;
}

export const MockMailContainer:React.FC<MockMailContainerProps> = ({ loggedIn, currentLoggedInUser, }) => {

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
        />
    )
}