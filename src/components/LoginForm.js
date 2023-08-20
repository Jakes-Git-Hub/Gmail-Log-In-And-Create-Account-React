import React from "react";

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
    handleCreateAccountClick
}) => {
    return (
        <form onSubmit={handleSubmit}>

            <h1 class="thin space">Sign In</h1>

            <h2 class='thin gap'>to continue to Gmail</h2>

            <label class="space line-height label-input-width input-label">
                <input 
                    class="input"
                    type='text' 
                    value={email} 
                    placeholder={emailPlaceholder}
                    onFocus={handleEmailClick}
                    onBlur={handleEmailBlur}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
     
            <label class="space line-height label-input-width input-label">
                <input 
                    class="input disable-eye-icon"
                    type='password'
                    value={password}
                    placeholder={passwordPlaceholder}
                    onFocus={handlePasswordClick}
                    onBlur={handlePasswordBlur}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            
            <button class="space blue-button" type='submit'>
                Login   
            </button>


            <p class="space hyper-link">Forgot Email?</p>
            <p class="space hyper-link">Forgot Password?</p>
            <button class="last grey-button" onClick={handleCreateAccountClick}>Create account</button>
        </form>
  );
}


