import React from "react";
import errorImage from '../images/Daco_5575399.png';

export const LoginForm = ({ 
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    handlePasswordClick, 
    handleEmailClick,
    emailPlaceholder,
    passwordPlaceholder,
    handleEmailBlur,
    handlePasswordBlur,
    handleCreateAccountClick,
    emailIsEmpty,
    passwordIsEmpty,
    isImagePreloaded
}) => {
    return (
        <form onSubmit={handleSubmit}>

            <h1 class="thin h1-space">Sign In</h1>

            <h2 class='thin gap'>to continue to Gmail</h2>

            <label class="space line-height label-input-width input-label">
                <input 
                    class={`${emailIsEmpty ? 'error' : "input"}`}
                    id='emailInput'
                    type='text' 
                    value={email} 
                    placeholder={emailPlaceholder}
                    onFocus={handleEmailClick}
                    onBlur={handleEmailBlur}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            {emailIsEmpty && isImagePreloaded && (
                <div class='error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Enter first name</p>
                </div>
            )}
     
            <label class="space line-height label-input-width input-label">
                <input 
                    class={`disable-eye-icon ${passwordIsEmpty ? 'error' : "input"}`}
                    id='passwordInput'
                    type='password'
                    value={password}
                    placeholder={passwordPlaceholder}
                    onFocus={handlePasswordClick}
                    onBlur={handlePasswordBlur}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            {passwordIsEmpty && isImagePreloaded && (
                <div class='error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Enter first name</p>
                </div>
            )}
            
            <button class="sign-in-space blue-button">
                Login   
            </button>


            <p class="links-font-size sign-in-space hyper-link">Forgot Email?</p>
            <p class="links-font-size sign-in-space hyper-link">Forgot Password?</p>
            <button type='button' class="links-font-size last grey-button" onClick={handleCreateAccountClick}>Create account</button>
        </form>
  );
}


