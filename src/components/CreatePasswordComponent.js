import React from 'react';

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
    setShowPassword,
    togglePassword
}) => {

    return (
        <form>

            <h1 class="thin h1-space">Create a strong password</h1>

            <h2 class='thin gap center'>Create a strong password with a mix of letters, numbers and symbols</h2>

            <label class="password-space line-height label-input-width input-label">
                <input 
                    class="input"
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
                    class="input"
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    placeholder={confirmPlaceholder}
                    onFocus={handleConfirmClick}
                    onBlur={handleConfirmBlur}
                />
            </label>

            {passwordMismatchError && 
                <div class='error-div'>
                    <p class="input-error-message">Those passwords didn’t match. Try again.</p>
                </div>
            }

            <div className={`password-toggle ${showPassword ? 'checked' : ''}`}>
                <label className='checkbox-text-colour custom-checkbox-label'>
                    <input
                        id="showPasswordCheckbox"
                        type="checkbox"
                        checked={showPassword}
                        onChange={togglePassword}
                    />
                    <span className="custom-checkbox"></span>
                    Show Password
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