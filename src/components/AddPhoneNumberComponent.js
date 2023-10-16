import React from 'react';
import errorImage from '../images/Daco_5575399.png';

export const AddPhoneNumberComponent = ({ 
    phoneNumber,
    setPhoneNumber,
    handlePhoneNumberClick,
    handlePhoneNumberBlur,
    phoneNumberPlaceholder,
    handleNextClick,
    isPhoneNumberEmpty,
    isImagePreloaded,
    isIncorrectFormat,
    isAlreadyRegistered,
}) => {

    return (
        <form>

            <h1 class="thin h1-space">Add phone Number</h1>

            <div id>
                <label class="space line-height label-input-width input-label" id='username-input-width'>
                    <div class='placeholder-satic-cohersion'>
                        <input 
                            id='usernameInput'
                            class={isPhoneNumberEmpty ? 'error' : 'input'}
                            type='text' 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            placeholder={phoneNumberPlaceholder}
                            onFocus={handlePhoneNumberClick}
                            onBlur={handlePhoneNumberBlur}
                        />
                    </div>
                </label>
            </div>

            {isPhoneNumberEmpty && isImagePreloaded ? (
                <div class='long-error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Please enter a phone number</p>
                </div>
            ) : isIncorrectFormat && isImagePreloaded ? (
                <div class='error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">This phone number format is not recognized. Please check the country and number.</p>
                </div>
            ) : isAlreadyRegistered && isImagePreloaded (
                <div class='error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">This phone number has been used too many times</p>
                </div>
            )}

                <div class='below-input-small-grey'>
                    <p class='small-grey'>Google will verify this number via SMS (charges may apply).</p>
                </div>

            <div id='button-right-choose-email'>
                <button type='button' class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}