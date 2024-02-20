import React from 'react';

export const MockMail = ({ loggedIn, currentLoggedInUser, users }) => {

    return (
        <>
            {loggedIn && currentLoggedInUser && users[0].firstName && (
                <>  
                    <h1 className='logged-in-user'>Welcome, {currentLoggedInUser}!</h1>
                    <h2>User Info:</h2>
                    <ul>
                        <li>First Name: {users[0].firstName}</li>
                        <li>Last Name: {users[0].lastName}</li>
                        <li>Month: {users[0].month}</li>
                        <li>Day: {users[0].day}</li>
                        <li>Year: {users[0].year}</li>
                        <li>Gender: {users[0].gender}</li>
                        <li>Custom Gender: {users[0].customGender}</li>
                        <li>Pronoun: {users[0].pronoun}</li>
                        <li>Email: {users[0].email}</li>
                        <li>Password: {users[0].password}</li>
                        <li>Phone Number: {users[0].phoneNumber}</li>
                        <li>Country: {users[0].countryDetails.name}</li>
                        <li>Verification Code: {users[0].verificationCode}</li>
                        <li>Settings: {users[0].settings}</li>
                        <li>Manual Setting 1: {users[0].manualSetting1}</li>
                        <li>Manual Setting 2: {users[0].manualSetting2}</li>
                        <li>Manual Setting 3: {users[0].manualSetting3}</li>
                    </ul>
                </>  
            )}
        </>
    )
}