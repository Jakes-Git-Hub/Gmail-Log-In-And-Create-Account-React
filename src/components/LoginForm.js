import React from "react";

export const LoginForm = ({ 
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
    handleLogin, 
    handlePasswordClick, 
    handleUsernameClick,
    usernamePlaceholder,
    passwordPlaceholder,
    handleUsernameBlur,
    handlePasswordBlur,
}) => {
    return (
        <form>

            <h1 class="thin space">Sign In</h1>

            <h2 class='thin gap'>to continue to Gmail</h2>

            <label class="space line-height">
                <input 
                    class="input"
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder={usernamePlaceholder}
                    onFocus={handleUsernameClick}
                    onBlur={handleUsernameBlur}
                />
            </label>
     
            <label class="space line-height">
                <input 
                    class="input disable-eye-icon"
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={passwordPlaceholder}
                    onFocus={handlePasswordClick}
                    onBlur={handlePasswordBlur}
                />
            </label>
            
            <button class="space blue-button" onClick={handleLogin}>
                Login   
            </button>


            <p class="space hyper-link">Forgot Username?</p>
            <p class="space hyper-link">Forgot Password?</p>
            <button class="last grey-button">Create account</button>
        </form>
  );
}


