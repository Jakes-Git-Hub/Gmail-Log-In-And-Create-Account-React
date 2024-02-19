import React from 'react';

export const MockMail = ({ loggedIn, currentLoggedInUser, users }) => {

    return (
        <>
            {loggedIn && currentLoggedInUser && (
                <>  
                    <h1 className='logged-in-user'>Welcome, {currentLoggedInUser}!</h1>
                    <h2 className='logged-in-user'>User Info: {users}</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </>  
            )}
        </>
    )
}