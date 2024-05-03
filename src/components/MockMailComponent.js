import React from 'react';

export const MockMail = ({ loggedIn, currentLoggedInUser, }) => {

    return (
        <>
            {loggedIn && currentLoggedInUser && (

                <>  
                    <h1 className='logged-in-user' data-testid='MM'>Welcome, {currentLoggedInUser.firstName}</h1>

                    <h2>User Info:</h2>

                    <ul>
                        {currentLoggedInUser.firstName && <li>First Name: {currentLoggedInUser.firstName}</li>}
                        {currentLoggedInUser.lastName && <li>Last Name: {currentLoggedInUser.lastName}</li>}
                        {(currentLoggedInUser.day && currentLoggedInUser.month && currentLoggedInUser.year) && <li>DOB Month: {currentLoggedInUser.day}/ {currentLoggedInUser.month}/ {currentLoggedInUser.year}</li>}
                        {currentLoggedInUser.gender && <li>Gender: {currentLoggedInUser.gender}</li>}
                        {currentLoggedInUser.customGender && <li>Custom Gender: {currentLoggedInUser.customGender}</li>}
                        {currentLoggedInUser.pronoun && <li>Pronoun: {currentLoggedInUser.pronoun}</li>}
                        {currentLoggedInUser.email && <li>Email: {currentLoggedInUser.email}</li>}
                        {currentLoggedInUser.phoneNumber && <li>Phone Number: {currentLoggedInUser.phoneNumber}</li>}
                        {currentLoggedInUser.countryDetails && <li>Country: {currentLoggedInUser.countryDetails.name}</li>}
                        {currentLoggedInUser.manualSetting1 && <li>Manual Setting 1: {currentLoggedInUser.manualSetting1}</li>}
                        {currentLoggedInUser.manualSetting2 && <li>Manual Setting 2: {currentLoggedInUser.manualSetting2}</li>}
                        {currentLoggedInUser.manualSetting3 && <li>Manual Setting 3: {currentLoggedInUser.manualSetting3}</li>}
                        {currentLoggedInUser.manualSetting4 && <li>Manual Setting 4: {currentLoggedInUser.manualSetting4}</li>}
                    </ul>

                </> 

            )}
        </>
    )
}