import React from 'react';

export const CreateAccountcomponent = ({ 
    firstName,
    lastName,
    firstNamePlaceholder,
    lastNamePlaceholder,
    handleFirstNameClick,
    handleLastNameClick,
    handleFirstNameBlur,
    handleLastNameBlur,
    handleNextClick
}) => {

    return (
        <form>

            <h1 class="thin h1-space">Create a Google Account</h1>

            <h2 class='thin gap'>Enter your name</h2>

            <label class="space line-height label-input-width input-label">
                <input 
                    class="input"
                    type='text' 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder={firstNamePlaceholder}
                    onFocus={handleFirstNameClick}
                    onBlur={handleFirstNameBlur}
                />
            </label>
     
            <label class="space line-height label-input-width input-label">
                <input 
                    class="input disable-eye-icon"
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={lastNamePlaceholder}
                    onFocus={handleLastNameClick}
                    onBlur={handleLastNameBlur}
                />
            </label>
            
            <div class='button-right'>
                <button class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}