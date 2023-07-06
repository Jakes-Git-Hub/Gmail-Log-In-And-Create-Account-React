import React from 'react';
import { MockMail } from '../components/MockMail';

export const MockMailContainer = ({ loggedIn, currentLoggedInUser }) => {

    return (
        <MockMail 
        loggedIn={loggedIn}
        currentLoggedInUser={currentLoggedInUser}
        />
    )
}