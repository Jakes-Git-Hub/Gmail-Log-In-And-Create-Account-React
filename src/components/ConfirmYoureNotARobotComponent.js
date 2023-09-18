import React from 'react';
import errorImage from '../images/Daco_5575399.png';

export const ConfirmYoureNotARobotComponent = ({ 

}) => {

    return (
        <form>

            <h1 class="thin h1-space">Confirm You're Not A Robot</h1>

            <h2 class='thin gap center' id='h2'>Get a verification code sent to your phone</h2>

            <label class="space line-height label-input-width input-label" id='username-input-width'>
                <div class='placeholder-satic-cohersion'>
                    <input 
                        id='usernameInput'
                        class={isUsernameEmpty ? 'error' : 'input'}
                        type='text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder={emailPlaceholder}
                        onFocus={handleEmailClick}
                        onBlur={handleEmailBlur}
                    />
                    <span class='static-position'>
                        @gmail.com
                    </span>
                </div>
            </label>

            {isIncorrectLength && isImagePreloaded ? (
                <div class='long-error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Please enter a phone number</p>
                </div>
            ) : isUsernameEmpty && isImagePreloaded ? (
                <div class='error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">This phone number format is not recognized. Please check the country and number.</p>
                </div>
            ) : usesUnallowedChars && isImagePreloaded ? (
                <div class='long-error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Sorry, only letters (a-z), numbers (0-9) and periods (.) are allowed.</p>
                </div>
            ) : (
                <div id='choose-username-small-grey'>
                    <p class='small-grey'>You can use letters, numbers & periods</p>
                </div>
            )}

            <p>Google will verify this nummber via SMS (charges may apply).</p>

            <div id='button-right-choose-email'>
                <button type='button' class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}