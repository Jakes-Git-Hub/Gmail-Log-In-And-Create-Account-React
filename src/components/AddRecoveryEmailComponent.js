import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const AddRecoveryEmailComponent = ({ 
    recoveryEmail,
    setRecoveryEmail,
    recoveryEmailPlaceholder,
    handleRecoveryEmailClick,
    handleRecoveryEmailBlur,
    handleNextClick,
    isImagePreloaded,
    errorCondition,
    handleSkip,
    handleSubmit,
    isImageLoaded,
}) => {


    return (

        <div id='google-container-cynar'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form onSubmit={handleSubmit}>

                    <h1 class="thin h1-space">Add recovery email</h1>
                    <div id='reduce-width-h2'>
                        <h2 class='thin gap center'>The address where Google can contact you if there’s unusual activity in your account or if you get locked out.</h2>
                    </div>

                    <label id='create-password-space'class=" line-height label-input-width input-label">
                        <input 
                            id='recoveryEmailInput'
                            class={errorCondition === 'enterValidEmail' || errorCondition === 'passwordMismatch' || errorCondition === 'dontForgetAtSymbol' || errorCondition === 'enterADomainName' ? 'error' : 'input'}
                            type='text'
                            value={recoveryEmail} 
                            onChange={(e) => setRecoveryEmail(e.target.value)} 
                            placeholder={recoveryEmailPlaceholder}
                            onFocus={handleRecoveryEmailClick}
                            onBlur={handleRecoveryEmailBlur}
                        />
                    </label>
            
                    {errorCondition === 'enterValidEmail' && isImagePreloaded && (
                        <div class='error-div-add-recovery-email'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Enter a valid email</p>
                        </div>
                    )}

                    {errorCondition === 'dontForgetAtSymbol' && isImagePreloaded && ( 
                        <div class='error-div-add-recovery-email'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Don't forget to include the '@'.</p>
                        </div>
                    )} 
                    
                    {errorCondition === 'enterADomainName' && isImagePreloaded && (
                        <div class='error-div-add-recovery-email'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Enter a domain name after the '@'.</p>
                        </div>
                    )}
                    
                    <div class='next-and-skip-button-duo'>
                        <button class="button-space-add-recovery-email white-button" type="submit" onClick={handleNextClick}>
                                Next   
                        </button>
                        <button class="button-space-add-recovery-email white-button" type="button" onClick={handleSkip}>
                                Skip   
                        </button>
                    </div>

                </form>

        </div>
    );
}
