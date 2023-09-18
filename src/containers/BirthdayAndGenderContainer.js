import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BirthdayAndGenderComponent } from '../components/BirthdayAndGenderComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const BirthdayAndGenderContainer = ({ updateUser }) => {

    const [month, setMonth] = useState('');
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [monthPlaceholder, setMonthPlaceholder] = useState("Month");
    const [dayPlaceholder, setDayPlaceholder] = useState("Day");
    const [yearPlaceholder, setYearPlaceholder] = useState("Year");
    const [genderPlaceholder, setGenderPlaceholder] = useState("Gender");
    const [incompleteBirthday, setIncompleteBirthday] = useState(false);
    const [genderEmpty, setGenderEmpty] = useState(false);
    const [isMonthSelected, setIsMonthSelected] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

// Month

    const handleMonthClick = () => {
        setMonthPlaceholder("");
    };

    const handleMonthBlur = () => {
        if (month === "") {
            setMonthPlaceholder("Month");
        }
    };

    const handleSelectMonth = (event) => {
        setMonth(event.target.value);
        setMonthPlaceholder("");
        setIsMonthSelected(true);
    };

// Day

    const handleDayClick = () => {
        setDayPlaceholder("");
    };

    const handleDayBlur = () => {
        if (day === "") {
            setDayPlaceholder("Day");
        }
    };

    

    const handleSelectDay = (event) => {
        const inputDay = event.target.value;
        const maxDayLength = 2;
        if (inputDay.length <= maxDayLength) {
            setDay(inputDay);
        }
    };


// Year

    const handleYearClick = () => {
        setYearPlaceholder("");
    };

    const handleYearBlur = () => {
        if (year === "") {
            setYearPlaceholder("Year");
        }
    };

    const handleSelectYear = (event) => {
        const inputYear = event.target.value;
        const maxYearLength = 4;
        if (inputYear.length <= maxYearLength) {
            setYear(inputYear);
        }
    };

// Gender

    const handleGenderClick = () => {
        setGenderPlaceholder("");
    };

    const handleGenderBlur = () => {
        if (gender === "") {
            setGenderPlaceholder("Gender");
        }
    };

    const handleSelectGender = (event) => {
        setGender(event.target.value);
    };

// Error Messages

    const birthdayError = () => setErrorCondition('incompleteBirthday');

    const wrongFormat = () => setErrorCondition('isWrongFormat');
    
    const genderError = () => setGenderEmpty(true);

// Handle Next Click

    const handleNextClick = () => {
        const isBirthdayEmpty = month === '' || day === '' || year === '';
        const isGenderEmpty = gender === '';
        setErrorCondition(null);
        if (isBirthdayEmpty) {
            birthdayError();
        } if (isGenderEmpty) {
            genderError();
        } if (!isBirthdayEmpty && !isGenderEmpty) {
            updateUser({month: month, day: day, year: year, gender: gender})
            setMonth('');
            setDay('');
            setYear('');
            setGender('');
            navigate('/choose-your-gmail-address')
        } if ((typeof day === 'string' || typeof year === 'string') && (day !== '' || year !== '')) {
            wrongFormat();
        }
    };

    return (
        <BirthdayAndGenderComponent
            month={month}
            monthPlaceholder={monthPlaceholder}
            handleMonthClick={handleMonthClick}
            handleMonthBlur={handleMonthBlur}
            handleSelectMonth={handleSelectMonth}
            day={day}
            dayPlaceholder={dayPlaceholder}
            handleDayClick={handleDayClick}
            handleDayBlur={handleDayBlur}
            handleSelectDay={handleSelectDay}
            year={year}
            yearPlaceholder={yearPlaceholder}
            handleYearClick={handleYearClick}
            handleYearBlur={handleYearBlur}
            handleSelectYear={handleSelectYear}
            gender={gender}
            genderPlaceholder={genderPlaceholder}
            handleGenderBlur={handleGenderBlur}
            handleGenderClick={handleGenderClick}
            handleSelectGender={handleSelectGender}
            handleNextClick={handleNextClick}
            incompleteBirthday={incompleteBirthday}
            isImagePreloaded={isImagePreloaded}
            genderEmpty={genderEmpty}
            isMonthSelected={isMonthSelected}
            errorCondition={errorCondition}
        />
    );
}
