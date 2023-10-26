import React from 'react';
import Select from 'react-select';
import errorImage from '../images/Daco_5575399.png';
import GBSVG from '../images/flags/GBSVG.svg';

export const AddPhoneNumberComponent = ({ 
    phoneNumber,
    setPhoneNumber,
    handlePhoneNumberClick,
    handlePhoneNumberBlur,
    phoneNumberPlaceholder,
    handleNextClick,
    handleSkip,
    isPhoneNumberEmpty,
    isImagePreloaded,
    isIncorrectFormat,
    isAlreadyRegistered,
    customOptions,
    customStyles
}) => {

    return (
        <form className='phone-number-form'>

            <h1 class="thin h1-space-phone-number">Add phone number</h1>

            <div id='add-phone-number-dropdown-and-input'>
                <Select
                    styles={customStyles}
                    class='flag-drop-down'
                    options={customOptions}
                    placeholder={<img src={GBSVG} alt="Flag" width="24" height="16" />}
                    isSearchable={false}
                    noOptionsMessage={() => <img src={GBSVG} alt="Flag" width="24" height="16" />}
                    isClearable={true}
                />
                <label class="space-phone-number-input line-height label-input-width input-label" id='phoneNumber-input-width'>
                    <div class='placeholder-satic-cohersion-phone-number'>
                        <input 
                            id='phoneNumberInput'
                            class={isPhoneNumberEmpty ? 'short-error' : 'short-input'}
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

                <div class='below-input-add-phone-number'>
                    <p class='small-grey'>Google will use this number only for account security. Your number won’t be visible to others. You can choose later whether to use it for other purposes.</p>
                </div>

            

                <div class='next-and-skip-button-duo'>
                <button class="button-space-add-phone-number white-button" type="submit" onClick={handleNextClick}>
                        Next   
                </button>
                <button class="button-space-add-phone-number white-button" type="button" onClick={handleSkip}>
                        Skip   
                </button>
            </div>

        </form>
    );
}