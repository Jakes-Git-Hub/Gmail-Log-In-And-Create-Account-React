import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BirthdayAndGenderComponent } from '../components/BirthdayAndGenderComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";
import axios from "axios";

export const BirthdayAndGenderContainer = ({ updateUser, userData }) => {

    const [month, setMonth] = useState('');
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [genderEmpty, setGenderEmpty] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);  
    const [isCustomChecked, setIsCustomChecked] = useState(false); 
    const [customGender, setCustomGender] = useState("");
    const [customGenderEmpty, setCustomGenderEmpty] = useState("");
    const [pronoun, setPronoun] = useState("");
    const [pronounEmpty, setPronounEmpty] = useState("");
    const [text, setText] = useState({
        h1: 'Basic Information',
        h2: 'Enter your birthday and gender',
        month: 'Month',
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
        october: 'October',
        november: 'November',
        december: 'December',
        day: 'Day',
        year: 'Year',
        gender: 'Gender',
        female: 'female',
        male: 'male',
        ratherNotSay: 'Rather not say',
        custom: 'Custom',
        whatsYourGender: 'What\'s your gender?',
        pleaseReferToMeAs: 'Please refer to me as',
        other: 'Other',
        next: 'Next',
    });
    const [language, setLanguage] = useState(userData.language ? userData.language : 'en');

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

    // Checks if Google SVG is Loaded, to Render all at Once

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {
        console.log(`userData:`, userData);
    }, []);

// Translation

const googleAPIKey = 'AIzaSyAnvQnBbhJ9H6qMEnyo-i0yxoj1w_cmrWI';

// Change Language

    useEffect(() => {
        if (userData.language) {
            handleLanguageSelection();
        }
    }, []);

    const handleLanguageSelection = async (e) => {
        let chosenLanguage;
        if (e) {
            e.preventDefault();
            chosenLanguage = e.target.value;
        } else {
            chosenLanguage = userData.language;
        }

        // Translate each text in the 'text' object
        const translatedText = {};
        for (const key in text) {
            const translation = await changeLanguageAndTranslate(text[key], chosenLanguage);
            translatedText[key] = translation;
        }
        
        // Update the 'text' state with translated text
        setText(translatedText);
    };

    const changeLanguageAndTranslate = async (text, chosenLanguage) => {
        setLanguage(chosenLanguage);
        updateUser({ language: chosenLanguage })
        try {
            const res = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${googleAPIKey}`, {
                q: text,
                target: chosenLanguage,
            });
            return res.data.data.translations[0].translatedText;
        } catch (error) {
            console.error('Error translating text:', error);
            return null;
        }
    };

// Month

    const handleSelectMonth = (event, day, year) => {
        setMonth(event.target.value);
        if (day && year) {
            setErrorCondition(null);
        }
    };

// Day

    const handleSelectDay = (event, year, month) => {
        const inputDay = event.target.value;
        const maxDayLength = 2;
        if (inputDay.length <= maxDayLength) {
            setDay(inputDay);
            if (month && year && year.length === 4 && !isNaN(Number(year)) && !isNaN(Number(inputDay))) {
                setErrorCondition(null);
            } 
        }
    };

// Year

    const handleSelectYear = (event, day, month) => {
        const inputYear = event.target.value;
        setYear(inputYear);
        if (inputYear.length === 4 && month && day && day.length === 2 && !isNaN(Number(day)) && !isNaN(Number(inputYear))) {
                setErrorCondition(null);
        }
    };

// Gender

    const handleSelectGender = (event) => {
        setGender(event.target.value);
        setGenderEmpty(false);
        if (event.target.value === 'Custom') {
            setIsCustomChecked(true);
        } else {
            setIsCustomChecked(false);
        }
    };

// Custom Gender

    const handleSelectCustomGender = (e) => {
        setCustomGender(e.target.value);
    };

// Pronoun

    const handleSelectPronoun = (e) => {
        setPronoun(e.target.value);
        setPronounEmpty(false);
    };

// Error Messages

    const birthdayError = () => setErrorCondition('incompleteBirthday');

    const wrongFormat = () => setErrorCondition('isWrongFormat');
    
    const genderError = () => setGenderEmpty(true);

    const customGenderError = () => setCustomGenderEmpty(true);

    const pronounError = () => setPronounEmpty(true);

// Handle Next Click

    const handleNextClick = () => {
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
        
    };

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
            isImagePreloaded={isImagePreloaded}
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
            handleLanguageSelection={handleLanguageSelection}
            text={text}
        />
    );
};
