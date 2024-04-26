import { jest } from '@jest/globals';
import { AddRecoveryEmailContainer } from './AddRecoveryEmailContainer';
import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';

describe('AddRecoveryEmailContainer', () => {
    const recoveryEmail1 = 'test@gmail.com';
    const recoveryEmail2 = '1';
    const recoveryEmail3 = 'test@';
    const recoveryEmail4 = 'test';
    const recoveryEmail5 = 'test@gmail';
    const recoveryEmail6 = 'te@asdfasdf@7';
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <AddRecoveryEmailContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const AREComp = screen.getByTestId('AREComp');
        expect(AREComp).toBeInTheDocument();
    });
    it('loads image', () => {
        const googleWritingSvg = 'google-writing-svg.svg';
    
        jest.spyOn(global, 'Image').mockImplementation(function() {
          this.src = '';
        });
    
        act(() => {
            render(
                <Router>
                    <AddRecoveryEmailContainer 
                        updateUser={mockUpdateUser} 
                        text={textData} 
                        userData={mockUserData}
                    />
                </Router>
            );
        });
    
        expect(global.Image).toHaveBeenCalled();
        const imageInstance = global.Image.mock.instances[0];
        expect(imageInstance.src).toBe(googleWritingSvg);
    });
    describe('handleLanguageSelection', () => {
        it('should call updateUser with the correct language', () => {
            updateUser = jest.fn();

            handleLanguageSelection = jest.fn(chosenLanguage => {
                updateUser({ language: chosenLanguage });
            });
            const chosenLanguage = 'English';
            handleLanguageSelection(chosenLanguage);

            expect(handleLanguageSelection).toHaveBeenCalledWith(chosenLanguage);
            expect(updateUser).toHaveBeenCalledWith({ language: chosenLanguage });
        });
    });
    describe('isEmailValid', () => {
        it('Validates email', () => {
            isEmailValid = jest.fn(recoveryEmail => {
                const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                return emailPattern.test(recoveryEmail);
            });
            
            const result = isEmailValid(recoveryEmail1);

            expect(isEmailValid).toHaveBeenCalledWith(recoveryEmail1);
            expect(result).toBeTruthy();
        });
        it('de-validates email', () => {
            isEmailValid = jest.fn(recoveryEmail => {
                const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                return emailPattern.test(recoveryEmail);
            });
            const result = isEmailValid(recoveryEmail2);

            expect(isEmailValid).toHaveBeenCalledWith(recoveryEmail2);
            expect(result).toBeFalsy();
        });
    });
    describe('isStringAndAtSymbolThere', () => {
        it('returns true if string followed by an @ there', () => {
            const isStringAndAtSymbolThere = jest.fn(recoveryEmail => {
                return /@/g.test(recoveryEmail);
            });
            
            const result = isStringAndAtSymbolThere(recoveryEmail3);

            expect(isStringAndAtSymbolThere).toHaveBeenCalledWith(recoveryEmail3);
            expect(result).toBeTruthy();
        });
        it('returns false if there is no string followed by @', () => {
            const isStringAndAtSymbolThere = jest.fn(recoveryEmail => {
                return /@/g.test(recoveryEmail);
            });
            
            const result = isStringAndAtSymbolThere(recoveryEmail4);

            expect(isStringAndAtSymbolThere).toHaveBeenCalledWith(recoveryEmail4);
            expect(result).toBeFalsy();
        });
    });
    describe('isEmailInvalid', () => {
        it('returns true if string followed by an @ there and then a string', () => {
            const isEmailInvalid = jest.fn(recoveryEmail => {
                return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(recoveryEmail);
            });
            
            const result = isEmailInvalid(recoveryEmail5);

            expect(isEmailInvalid).toHaveBeenCalledWith(recoveryEmail5);
            expect(result).toBeTruthy();
        });
        it('returns false if no string followed by an @ there and then a string', () => {
            const isEmailInvalid = jest.fn(recoveryEmail => {
                return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(recoveryEmail);
            });
            
            const result = isEmailInvalid(recoveryEmail4);

            expect(isEmailInvalid).toHaveBeenCalledWith(recoveryEmail4);
            expect(result).toBeFalsy();
        });
    });
    describe('isDomainNameNotThere', () => {
        it('returns true if no Domain name', () => {
            const isDomainNameNotThere = jest.fn(recoveryEmail => {
                return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
            });
            
            const result = isDomainNameNotThere(recoveryEmail3);

            expect(isDomainNameNotThere).toHaveBeenCalledWith(recoveryEmail3);
            expect(result).toBeTruthy();
        });
        it('returns false if Domain name', () => {
            const isDomainNameNotThere = jest.fn(recoveryEmail => {
                return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
            });
            
            const result = isDomainNameNotThere(recoveryEmail5);

            expect(isDomainNameNotThere).toHaveBeenCalledWith(recoveryEmail5);
            expect(result).toBeFalsy();
        });
    });
    describe('isEmailNotValid', () => {
        it('returns true if email is incorrect', () => {

            const isEmailNotValid = jest.fn(recoveryEmail => {
                const invalidEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                const multipleAtSymbolPattern = /@.*@/;
                return invalidEmailPattern.test(recoveryEmail) || multipleAtSymbolPattern.test(recoveryEmail);
            });
            const result = isEmailNotValid(recoveryEmail6);

            expect(isEmailNotValid).toHaveBeenCalledWith(recoveryEmail6);
            expect(result).toBeTruthy();
        });
        it('returns false if email is correct', () => {
            const isEmailNotValid = jest.fn(recoveryEmail => {
                const invalidEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                const multipleAtSymbolPattern = /@.*@/;
                return invalidEmailPattern.test(recoveryEmail) || multipleAtSymbolPattern.test(recoveryEmail);
            });
            
            const result = isEmailNotValid(recoveryEmail5);

            expect(isEmailNotValid).toHaveBeenCalledWith(recoveryEmail5);
            expect(result).toBeFalsy();
        });
    });
    describe('handleEmailValidation', () => {
        let updateUser, setRecoveryEmail, setErrorCondition, navigate, recoveryEmailInput, isEmailValid, isEmailNotValid, isStringAndAtSymbolThere, isDomainNameNotThere, isEmailInvalid;
    
        beforeEach(() => {
            updateUser = jest.fn();
            setRecoveryEmail = jest.fn();
            setErrorCondition = jest.fn();
            navigate = jest.fn();
            recoveryEmailInput = { focus: jest.fn() };
            isEmailValid = jest.fn();
            isEmailNotValid = jest.fn();
            isStringAndAtSymbolThere = jest.fn();
            isDomainNameNotThere = jest.fn();
            isEmailInvalid = jest.fn();
        });
    
        it('calls updateUser and navigate when email is valid', () => {
            const handleEmailValidation = jest.fn(recoveryEmail => {
                if (isEmailValid(recoveryEmail)) {
                    updateUser({ recoveryEmail: recoveryEmail });
                    setRecoveryEmail('');
                    setErrorCondition(null);
                    navigate('/review-account-info');
                } if (recoveryEmail === '') {
                    setErrorCondition('enterValidEmail');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }    
                } if (isEmailNotValid(recoveryEmail)) {
                    setErrorCondition('emailAddressNotValid');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
                    setErrorCondition('dontForgetAtSymbol');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
                    setErrorCondition('enterADomainName');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
            });

            isEmailValid.mockReturnValue(true);
            handleEmailValidation('valid@email.com');
            expect(updateUser).toHaveBeenCalledWith({ recoveryEmail: 'valid@email.com' });
            expect(setRecoveryEmail).toHaveBeenCalledWith('');
            expect(setErrorCondition).toHaveBeenCalledWith(null);
            expect(navigate).toHaveBeenCalledWith('/review-account-info');
        });
    
        it('sets error condition when email is empty', () => {
            const handleEmailValidation = jest.fn(recoveryEmail => {
                if (isEmailValid(recoveryEmail)) {
                    updateUser({ recoveryEmail: recoveryEmail });
                    setRecoveryEmail('');
                    setErrorCondition(null);
                    navigate('/review-account-info');
                } if (recoveryEmail === '') {
                    setErrorCondition('enterValidEmail');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }    
                } if (isEmailNotValid(recoveryEmail)) {
                    setErrorCondition('emailAddressNotValid');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
                    setErrorCondition('dontForgetAtSymbol');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
                    setErrorCondition('enterADomainName');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
            });
            handleEmailValidation('');
            expect(setErrorCondition).toHaveBeenCalledWith('enterValidEmail');
            expect(recoveryEmailInput.focus).toHaveBeenCalled();
        });
    
        it('sets error condition when email is not valid', () => {
            const handleEmailValidation = jest.fn(recoveryEmail => {
                if (isEmailValid(recoveryEmail)) {
                    updateUser({ recoveryEmail: recoveryEmail });
                    setRecoveryEmail('');
                    setErrorCondition(null);
                    navigate('/review-account-info');
                } if (recoveryEmail === '') {
                    setErrorCondition('enterValidEmail');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }    
                } if (isEmailNotValid(recoveryEmail)) {
                    setErrorCondition('emailAddressNotValid');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
                    setErrorCondition('dontForgetAtSymbol');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
                    setErrorCondition('enterADomainName');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
            });
            isEmailNotValid.mockReturnValue(true);
            handleEmailValidation('invalid@email.com');
            expect(setErrorCondition).toHaveBeenCalledWith('emailAddressNotValid');
            expect(recoveryEmailInput.focus).toHaveBeenCalled();
        });
    
        it('sets error condition when @ symbol is missing', () => {
            const handleEmailValidation = jest.fn(recoveryEmail => {
                if (isEmailValid(recoveryEmail)) {
                    updateUser({ recoveryEmail: recoveryEmail });
                    setRecoveryEmail('');
                    setErrorCondition(null);
                    navigate('/review-account-info');
                } if (recoveryEmail === '') {
                    setErrorCondition('enterValidEmail');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }    
                } if (isEmailNotValid(recoveryEmail)) {
                    setErrorCondition('emailAddressNotValid');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
                    setErrorCondition('dontForgetAtSymbol');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
                    setErrorCondition('enterADomainName');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
            });
            isStringAndAtSymbolThere.mockReturnValue(false);
            handleEmailValidation('emailwithoutat.com');
            expect(setErrorCondition).toHaveBeenCalledWith('dontForgetAtSymbol');
            expect(recoveryEmailInput.focus).toHaveBeenCalled();
        });
    
        it('sets error condition when domain name is missing', () => {
            const handleEmailValidation = jest.fn(recoveryEmail => {
                if (isEmailValid(recoveryEmail)) {
                    updateUser({ recoveryEmail: recoveryEmail });
                    setRecoveryEmail('');
                    setErrorCondition(null);
                    navigate('/review-account-info');
                } if (recoveryEmail === '') {
                    setErrorCondition('enterValidEmail');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }    
                } if (isEmailNotValid(recoveryEmail)) {
                    setErrorCondition('emailAddressNotValid');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
                    setErrorCondition('dontForgetAtSymbol');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
                if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
                    setErrorCondition('enterADomainName');
                    if (recoveryEmailInput) {
                        recoveryEmailInput.focus();
                    }   
                } 
            });
            isDomainNameNotThere.mockReturnValue(true);
            isEmailInvalid.mockReturnValue(false);
            handleEmailValidation('emailwithoutdomain@');
            expect(setErrorCondition).toHaveBeenCalledWith('enterADomainName');
            expect(recoveryEmailInput.focus).toHaveBeenCalled();
        });
    });
    describe('handleNextClick', () => {
        it('calls preventDefault and handleEmailValidation', () => {
            const handleEmailValidation = jest.fn();
            let recoveryEmail;
    
            const handleNextClick = e => {
                e.preventDefault();
                handleEmailValidation(recoveryEmail);
            };
            
            const e = { preventDefault: jest.fn() };
    
            handleNextClick(e);
            expect(e.preventDefault).toHaveBeenCalled();
            expect(handleEmailValidation).toHaveBeenCalledWith(recoveryEmail);
        });
    });
});