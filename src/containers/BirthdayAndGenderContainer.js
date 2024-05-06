import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BirthdayAndGenderComponent } from '../components/BirthdayAndGenderComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const BirthdayAndGenderContainer = ({ updateUser, text,  userData, }) => {

    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');
    const [genderEmpty, setGenderEmpty] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);  
    const [isCustomChecked, setIsCustomChecked] = useState(false); 
    const [customGender, setCustomGender] = useState('');
    const [customGenderEmpty, setCustomGenderEmpty] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [pronounEmpty, setPronounEmpty] = useState('');

    const navigate = useNavigate();

// Handle Slow Svg Load

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
        setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {
        console.log('month', month);
    }, [month])

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage })

// Month

    const handleSelectMonth = e => {
        setMonth(e.target.value);
        if (day && year) {
            setErrorCondition(null);
        }
    }

// Day

    const handleSelectDay = e => {
        const inputDay = e.target.value;
        const maxDayLength = 2;
        if (inputDay.length <= maxDayLength) {
            setDay(inputDay);
            if (month && year && year.length === 4 && !isNaN(Number(year)) && !isNaN(Number(inputDay))) {
                setErrorCondition(null);
            } 
        }
    }

// Year

    const handleSelectYear = e => {
        const inputYear = e.target.value;
        setYear(inputYear);
        if (inputYear.length === 4 && month && day && day.length === 2 && !isNaN(Number(day)) && !isNaN(Number(inputYear))) {
            setErrorCondition(null);
        }
    }

// Gender

    const handleSelectGender = e => {
        setGender(e.target.value);
        setGenderEmpty(false);
        if (e.target.value === 'Custom') {
            setIsCustomChecked(true);
        } else {
            setIsCustomChecked(false);
        }
    }

// Custom Gender

    const handleSelectCustomGender = e => {
        setCustomGender(e.target.value);
    }

// Pronoun

    const handleSelectPronoun = e => {
        setPronoun(e.target.value);
        setPronounEmpty(false);
    }

// Error Messages

    const birthdayError = () => setErrorCondition('incompleteBirthday')

    const wrongFormat = () => setErrorCondition('isWrongFormat')
    
    const genderError = () => setGenderEmpty(true)

    const customGenderError = () => setCustomGenderEmpty(true)

    const pronounError = () => setPronounEmpty(true)

// Validate User Basic Info

    const validateUserBasicInfo = () => {
        const isGenderEmpty = gender === '';
        const numericDay = +day;
        const numericYear = +year;
        const isBirthdayEmpty = month === '' || day === '' || year === '';
        const isCustomGenderEmpty = customGender === '';
        const isPronounEmpty = pronoun === '';
        const isValidDate = !isNaN(numericDay) && !isNaN(numericYear) && new Date(year, month - 1, numericDay).getMonth() === +month - 1;
        if (isBirthdayEmpty) {
            birthdayError();
        } if (isGenderEmpty) {
            genderError();
        } if (!isBirthdayEmpty && !isGenderEmpty && !isNaN(numericDay) && !isNaN(numericYear)) {
            updateUser({month: month, day: day, year: year, gender: gender, customGender: customGender, pronoun: pronoun})
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
    }

// Handle Next Click

    const handleNextClick = () => validateUserBasicInfo();


    return (
        <BirthdayAndGenderComponent
            month={month}
            handleSelectMonth={handleSelectMonth}
            day={day}
            handleSelectDay={handleSelectDay}
            year={year}
            handleSelectYear={handleSelectYear}
            gender={gender}
            handleSelectGender={handleSelectGender}
            handleNextClick={handleNextClick}
            genderEmpty={genderEmpty}
            errorCondition={errorCondition}
            isImageLoaded={isImageLoaded}
            customGender={customGender}
            handleSelectCustomGender={handleSelectCustomGender}
            customGenderEmpty={customGenderEmpty}
            pronounEmpty={pronounEmpty}
            pronoun={pronoun}
            handleSelectPronoun={handleSelectPronoun}
            isCustomChecked={isCustomChecked}
            text={text}
            handleLanguageSelection={handleLanguageSelection}
            userData={userData}
        />
    );
};
