import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BirthdayAndGenderComponent } from '../components/BirthdayAndGenderComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import { SelectChangeEvent } from '@mui/material';

interface UserData {
    language: string;
    month?: string;
    day?: string;
    year?: string;
    gender?: string;
    customGender?: string;
    pronoun?: string;
}

interface Text {
    [key: string]: any;
}

interface BirthdayAndGenderContainerProps {
    updateUser: (data: Partial<UserData>) => void;
    text: Text;
    userData: UserData;
}

export const BirthdayAndGenderContainer: React.FC<BirthdayAndGenderContainerProps> = ({ updateUser, text, userData }) => {
    const [month, setMonth] = useState<string>('');
    const [day, setDay] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [genderEmpty, setGenderEmpty] = useState<boolean>(false);
    const [errorCondition, setErrorCondition] = useState<string | null>(null);
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [isCustomChecked, setIsCustomChecked] = useState<boolean>(false);
    const [customGender, setCustomGender] = useState<string>('');
    const [customGenderEmpty, setCustomGenderEmpty] = useState<boolean>(false);
    const [pronoun, setPronoun] = useState<string>('');
    const [pronounEmpty, setPronounEmpty] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('userData', userData);
    }, [userData]);

    // Handle Slow Svg Load
    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
            setIsImageLoaded(true);
        };
    }, []);

    // Change Language
    const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage });

    // Month
    const handleSelectMonth = (e: SelectChangeEvent<string>) => {
        setMonth(e.target.value);
        if (day && year) {
            setErrorCondition(null);
        }
    };

    // Day
    const handleSelectDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputDay = e.target.value;
        const maxDayLength = 2;
        if (inputDay.length <= maxDayLength) {
            setDay(inputDay);
            if (month && year && year.length === 4 && !isNaN(Number(year)) && !isNaN(Number(inputDay))) {
                setErrorCondition(null);
            }
        }
    };

    // Year
    const handleSelectYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputYear = e.target.value;
        const maxYearLength = 4;
        if (inputYear.length <= maxYearLength) {
            setYear(inputYear);
            if (inputYear.length === 4 && month && day && day.length === 2 && !isNaN(Number(day)) && !isNaN(Number(inputYear))) {
                setErrorCondition(null);
            }
        }
    };

    // Gender
    const handleSelectGender = (e: SelectChangeEvent<string>) => {
        setGender(e.target.value);
        setGenderEmpty(false);
        if (e.target.value === 'Custom') {
            setIsCustomChecked(true);
        } else {
            setIsCustomChecked(false);
        }
    };

    // Custom Gender
    const handleSelectCustomGender = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomGender(e.target.value);
    };

    // Pronoun
    const handleSelectPronoun = (e: SelectChangeEvent<string>) => {
        setPronoun(e.target.value);
        setPronounEmpty(false);
    };

    // Error Messages
    const birthdayError = () => setErrorCondition('incompleteBirthday');
    const wrongFormat = () => setErrorCondition('isWrongFormat');
    const genderError = () => setGenderEmpty(true);
    const customGenderError = () => setCustomGenderEmpty(true);
    const pronounError = () => setPronounEmpty(true);

    // Validate User Basic Info
    const validateUserBasicInfo = () => {
        const isGenderEmpty = gender === '';
        const numericDay = +day;
        const numericYear = +year;
        const isBirthdayEmpty = month === '' || day === '' || year === '';
        const isCustomGenderEmpty = customGender === '';
        const isPronounEmpty = pronoun === '';
        const isValidDate = !isNaN(numericDay) && !isNaN(numericYear) && new Date(Number(year), +month - 1, numericDay).getMonth() === +month - 1;
        if (isBirthdayEmpty) {
            birthdayError();
        }
        if (isGenderEmpty) {
            genderError();
        }
        if (!isBirthdayEmpty && !isGenderEmpty && !isNaN(numericDay) && !isNaN(numericYear)) {
            console.log('triggered');
            updateUser({ month, day, year, gender, customGender, pronoun });
            navigate('/choose-your-gmail-address');
        }
        if (!isBirthdayEmpty && (isNaN(numericDay) || isNaN(numericYear) || year.length < 4 || !isValidDate)) {
            wrongFormat();
        }
        if (isCustomGenderEmpty && isCustomChecked) {
            customGenderError();
        }
        if (customGender) {
            setCustomGenderEmpty(false);
        }
        if (isPronounEmpty && isCustomChecked) {
            pronounError();
        }
    };

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