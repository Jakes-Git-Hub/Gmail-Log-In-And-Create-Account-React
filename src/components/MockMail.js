import React from 'react';

export const MockMail = ({ loggedIn, currentLoggedInUser }) => {

    return (
        <>
            {loggedIn && <h1>Welcome, {currentLoggedInUser}!</h1>}
        </>
    )
}