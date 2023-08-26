import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BirthdayAndGenderComponent } from '../components/BirthdayAndGenderComponent';

export const BirthdayAndGenderContainer = ({ updateUser }) => {

    const [month, setMonth] = useState('');
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [monthPlaceholder, setMonthPlaceholder] = useState("Month");
    const [dayPlaceholder, setDayPlaceholder] = useState("Day");
    const [yearPlaceholder, setYearPlaceholder] = useState("Year");
    const [genderPlaceholder, setGenderPlaceholder] = useState("Gender");

    const navigate = useNavigate();

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
        setDay(event.target.value);
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
        setYear(event.target.value);
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

// Handle Next Click

const handleNextClick = () => {

    updateUser({month: month, day: day, year: year, gender: gender})

    setMonth('');
    setDay('');
    setYear('');
    setGender('');
  
    navigate('/choose-your-gmail-address')
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
        />

    )

}
