import React from 'react';
import errorImage from '../images/Daco_5575399.png';

export const CreatePasswordComponent = ({ 
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    passwordPlaceholder,
    handlePasswordClick,
    handlePasswordBlur,
    confirmPlaceholder,
    handleConfirmClick,
    handleConfirmBlur,
    handleNextClick,
    passwordMismatchError,
    showPassword,
    togglePassword,
    confirmPasswordEmpty,
    passwordAndConfirmEmpty,
    isImagePreloaded
}) => {


    return (
        <form>

            <h1 class="thin h1-space">Create a strong password</h1>
            <div id='create-password-h2'>
                <h2 class='thin gap center'>Create a strong password with a mix of letters, numbers and symbols</h2>
            </div>

            <label id='create-password-space'class=" line-height label-input-width input-label">
                <input 
                    id='passwordInput'
                    class={passwordAndConfirmEmpty ? 'error' : 'input'}
                    type={showPassword ? 'text' : 'password'}
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder={passwordPlaceholder}
                    onFocus={handlePasswordClick}
                    onBlur={handlePasswordBlur}
                />
            </label>
     
            <label class="space line-height label-input-width input-label" id='error-message-margin'>
                <input 
                    id='confirmPasswordInput'
                    class={confirmPasswordEmpty ? 'error' : 'input'}
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder={confirmPlaceholder}
                    onFocus={handleConfirmClick}
                    onBlur={handleConfirmBlur}
                />
            </label>

            {passwordAndConfirmEmpty && isImagePreloaded ? (
                <div class='error-div' id='create-password-error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Enter a password</p>
                </div>
            ) : confirmPasswordEmpty && password && isImagePreloaded ? ( 
                <div class='error-div' id='create-password-error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Confirm your password</p>
                </div>
            ) : passwordMismatchError && !confirmPasswordEmpty ? (
                <div class='error-div' id='create-password-error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Those passwords didn’t match. Try again.</p>
                </div>
            ) : null}
           
            <div className={`password-toggle ${showPassword ? 'checked' : ''}`}>
                <label className='checkbox-text-colour custom-checkbox-label'>
                    <input
                        id="showPasswordCheckbox"
                        type="checkbox"
                        checked={showPassword}
                        onChange={togglePassword}
                        className="custom-checkbox-input"
                    />
                    <span className="custom-checkbox">
                        <p class={`${showPassword ? 'tick-white' : 'tick-hidden'}`}>✓</p>
                    </span>
                    <p id='show-password-checkbox'>Show Password</p>
                </label>
            </div>
            
            <div id='create-password-next-button'>
                <button class="button-space blue-button" type="button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}
