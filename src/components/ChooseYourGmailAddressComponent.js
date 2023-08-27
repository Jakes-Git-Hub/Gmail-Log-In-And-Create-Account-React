import React from 'react';

export const ChooseYourGmailAddressComponent = ({ 
    email,
    setEmail,
    handleEmailClick,
    handleEmailBlur,
    emailPlaceholder,
    handleNextClick,
    staticDomain
}) => {

    return (
        <form>

            <h1 class="thin h1-space">How you'll sign in</h1>

            <h2 class='thin gap center' id='choose-email-h2'>Create a Gmail addres for signing in to your Google Account</h2>

            <label class="space line-height label-input-width input-label" id='username-input-width'>
                <div class='placeholder-satic-cohersion'>
                    <input 
                        class="input"
                        type='text' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder={emailPlaceholder}
                        onFocus={handleEmailClick}
                        onBlur={handleEmailBlur}
                    />
                    <span class='static-position'>
                        {staticDomain}
                    </span>
                </div>
            </label>

            <div id='button-right-choose-email'>
                <button class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}