import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const CreateAccountcomponent = ({ 
    firstName,
    setFirstName,
    lastName,
    setLastName,
    firstNamePlaceholder,
    lastNamePlaceholder,
    handleFirstNameClick,
    handleLastNameClick,
    handleFirstNameBlur,
    handleLastNameBlur,
    handleNextClick,
    firstNameEmpty,
    isImagePreloaded
}) => {

    return (
        <form>

                <h1 class="thin h1-space">Create a Google Account</h1>

                <h2 class='thin gap'>Enter your name</h2>

            <label class="space line-height label-input-width input-label">
                <input 
                    id='firstNameInput'
                    class={`${firstNameEmpty ? 'error' : "input"}`}
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

            {firstNameEmpty && isImagePreloaded ? (
                <div class='error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Enter first name</p>
                </div>
            ) : (
                <div className='hidden-error-message-container-create-account'></div>
            )}
            
            <div class='button-right'>
                <button type='button' class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}