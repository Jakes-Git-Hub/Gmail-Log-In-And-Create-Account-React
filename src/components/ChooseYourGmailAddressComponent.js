import React from 'react';

export const ChooseYourGmailAddressComponent = ({ 
    email,
    setEmail,
    handleEmailClick,
    handleEmailBlur,
    emailPlaceholder,
    handleNextClick
}) => {

    return (
        <form>

            <h1 class="thin h1-space">How you'll sign in</h1>

            <h2 class='thin gap'>Create a Gmail addres for signing in to your Google Account</h2>

            <label class="space line-height label-input-width input-label">
                <input 
                    class="input"
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder={emailPlaceholder}
                    onFocus={handleEmailClick}
                    onBlur={handleEmailBlur}
                />
            </label>

            <div class='button-right'>
                <button class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button>
            </div>

        </form>
    );
}