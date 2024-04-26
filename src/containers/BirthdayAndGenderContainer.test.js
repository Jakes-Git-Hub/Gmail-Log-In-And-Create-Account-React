import { jest } from '@jest/globals';
import { BirthdayAndGenderContainer } from './BirthdayAndGenderContainer';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';

describe('BirthdayAndGenderContainer', () => {
    const day = '28';
    const month = 'April';
    const year = '1993';
    const setMonth = jest.fn();
    const setErrorCondition = jest.fn();
    const setDay = jest.fn();
    const setYear = jest.fn();
    const setGender = jest.fn();
    const setGenderEmpty = jest.fn();
    const setIsCustomChecked = jest.fn();
    const setPronoun = jest.fn();
    const setPronounEmpty = jest.fn();
    const setCustomGenderEmpty = jest.fn();
    const gender = 'male';
    const customGender = '';
    const isCustomChecked = false;
    const pronoun = '';
    const pronounError = jest.fn();
    const updateUser = jest.fn();
    const navigate = jest.fn();
    const wrongFormat = jest.fn();
    const birthdayError = jest.fn();
    const genderError = jest.fn();
    const customGenderError = jest.fn();
    const validateUserBasicInfo = jest.fn();

    it('renders without crashing', () => {
        const mockUpdateUser = jest.fn();
        const mockUserData = {};
        render(
            <Router>
                <BirthdayAndGenderContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const BAGComp = screen.getByTestId('BAGComp');
        expect(BAGComp).toBeInTheDocument();
    });
    describe('handleSelectMonth', () => {
        it('sets Month, clears error when day and year present', () => {
            const handleSelectMonth = jest.fn(e => {
                setMonth(e.target.value);
                if (day && year) {
                    setErrorCondition(null);
                }
            });

            const e = { target: { value: 'April' } };
            
            handleSelectMonth(e);

            expect(handleSelectMonth).toHaveBeenCalledWith(e);
            expect(setMonth).toHaveBeenCalledWith('April');
            expect(setErrorCondition).toHaveBeenCalledWith(null);
        });
    });
    describe('handleSelectDay', () => {
        it('sets Day if input is 2 or less and clears error month and year has been inputted', () => {
            const handleSelectDay = jest.fn(e => {
                const inputDay = e.target.value;
                const maxDayLength = 2;
                if (inputDay.length <= maxDayLength) {
                    setDay(inputDay);
                    if (month && year && year.length === 4 && !isNaN(Number(year)) && !isNaN(Number(inputDay))) {
                        setErrorCondition(null);
                    } 
                }
            });

            const e = { target: { value: '28' } };
            
            handleSelectDay(e);

            expect(handleSelectDay).toHaveBeenCalledWith(e);
            expect(setDay).toHaveBeenCalledWith(e.target.value);
            expect(setErrorCondition).toHaveBeenCalledWith(null);
        });
    });
    describe('handleSelectYear', () => {
        it('sets year and clears error if all other inputs are filled', () => {
            const handleSelectYear = jest.fn(e => {
                const inputYear = e.target.value;
                setYear(inputYear);
                if (inputYear.length === 4 && month && day && day.length === 2 && !isNaN(Number(day)) && !isNaN(Number(inputYear))) {
                    setErrorCondition(null);
                }
            });

            const e = { target: { value: '1993' } };
            
            handleSelectYear(e);

            expect(handleSelectYear).toHaveBeenCalledWith(e);
            expect(setYear).toHaveBeenCalledWith(e.target.value);
            expect(setErrorCondition).toHaveBeenCalledWith(null);
        });
    });
    describe('handleSelectGender', () => {
        it('sets gender and gender empty to false on input - custom gender set to true if checked, false if not', () => {
            const handleSelectGender = jest.fn(e => {
                setGender(e.target.value);
                setGenderEmpty(false);
                if (e.target.value === 'Custom') {
                    setIsCustomChecked(true);
                } else {
                    setIsCustomChecked(false);
                }
            });

            const e = { target: { value: 'male' } };
            
            handleSelectGender(e);

            expect(handleSelectGender).toHaveBeenCalledWith(e);
            expect(setGender).toHaveBeenCalledWith(e.target.value);
            expect(setGenderEmpty).toHaveBeenCalledWith(false);
            expect(setIsCustomChecked).toHaveBeenCalledWith(false);
        });
    });
    describe('handleSelectPronoun', () => {
        it('sets pronoun and pronoun empty to false', () => {
            const handleSelectPronoun = jest.fn(e => {
                setPronoun(e.target.value);
                setPronounEmpty(false);
            });

            const e = { target: { value: 'custom' } };
            
            handleSelectPronoun(e);

            expect(setPronoun).toHaveBeenCalledWith(e.target.value);
            expect(setPronounEmpty).toHaveBeenCalledWith(false);
        });
    });
    describe('handleSelectPronoun', () => {
        it('sets pronoun and pronoun empty to false', () => {
            const handleSelectPronoun = jest.fn(e => {
                setPronoun(e.target.value);
                setPronounEmpty(false);
            });

            const e = { target: { value: 'custom' } };
            
            handleSelectPronoun(e);

            expect(setPronoun).toHaveBeenCalledWith(e.target.value);
            expect(setPronounEmpty).toHaveBeenCalledWith(false);
        });
    });
    describe('birthdayError', () => {
        it('sets errorCondition to incompleteBirthday', () => {
            const birthdayError = jest.fn(() => setErrorCondition('incompleteBirthday'))
            
            birthdayError();

            expect(setErrorCondition).toHaveBeenCalledWith('incompleteBirthday');
        });
    });
    describe('wrongFormat', () => {
        it('sets errorCondition to isWrongFormat', () => {
            const wrongFormat = jest.fn(() => setErrorCondition('isWrongFormat'));
            
            wrongFormat();

            expect(setErrorCondition).toHaveBeenCalledWith('isWrongFormat');
        });
    });
    describe('genderError', () => {
        it('sets genderEmpty to true', () => {
            const genderError = jest.fn(() => setGenderEmpty(true));
            
            genderError();

            expect(setGenderEmpty).toHaveBeenCalledWith(true);
        });
    });
    describe('customGenderError', () => {
        it('sets customGenderEmpty to true', () => {
            const customGenderError = jest.fn(() => setCustomGenderEmpty(true));
            
            customGenderError();

            expect(setCustomGenderEmpty).toHaveBeenCalledWith(true);
        });
    });
    describe('pronounError', () => {
        it('sets pronounEmpty to true', () => {
            const pronounError = jest.fn(() => setPronounEmpty(true));

            pronounError();

            expect(setPronounEmpty).toHaveBeenCalledWith(true);
        });
    });
    describe('validateUserBasicInfo', () => {
        it('handle validating users inputted basic information', () => {
            const validateUserBasicInfo = jest.fn(() => {
                const isGenderEmpty = gender === '';
                const numericDay = +day;
                const numericYear = +year;
                const isBirthdayEmpty = month === '' || day === '' || year === '';
                const isCustomGenderEmpty = customGender === '';
                const isPronounEmpty = pronoun === '';
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const monthNumber = monthNames.indexOf(month);
                const isValidDate = !isNaN(numericDay) && !isNaN(numericYear) && new Date(year, monthNumber, numericDay).getMonth() === monthNumber;
                if (isBirthdayEmpty) {
                    birthdayError();
                } if (isGenderEmpty) {
                    genderError();
                } if (!isBirthdayEmpty && !isGenderEmpty && !isNaN(numericDay) && !isNaN(numericYear)) {
                    updateUser({ month: month, day: day, year: year, gender: gender, customGender: customGender, pronoun: pronoun })
                    navigate('/choose-your-gmail-address')
                } if (!isBirthdayEmpty && (isNaN(numericDay) || isNaN(numericYear) || year.length < 4 || !isValidDate)) {
                    wrongFormat();
                } if (isCustomGenderEmpty && isCustomChecked) {
                    customGenderError();
                } if (customGender) {
                    setCustomGenderEmpty(false);
                } if (isPronounEmpty && isCustomChecked) {
                    pronounError();
                }
            });

            validateUserBasicInfo();

            expect(birthdayError).not.toHaveBeenCalled();
            expect(genderError).not.toHaveBeenCalled();
            expect(wrongFormat).not.toHaveBeenCalled();
            expect(customGenderError).not.toHaveBeenCalled();
            expect(setCustomGenderEmpty).not.toHaveBeenCalled();
            expect(pronounError).not.toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({month: month, day: day, year: year, gender: gender, customGender: customGender, pronoun: pronoun});
            expect(navigate).toHaveBeenCalledWith('/choose-your-gmail-address');
        });
    });
    describe('handleNextClick', () => {
        it('calls validateUserBasicInfo', () => {
            const handleNextClick = () => validateUserBasicInfo();

            handleNextClick();

            expect(validateUserBasicInfo).toHaveBeenCalled();
        });
    });
});


