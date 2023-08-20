import React from 'react';

export const MockMail = ({ loggedIn, currentLoggedInUser }) => {

    return (
        <>
            {loggedIn && currentLoggedInUser && (
                <h1 className='logged-in-user'>Welcome, {currentLoggedInUser}!</h1>
            )}
        </>
    )
}