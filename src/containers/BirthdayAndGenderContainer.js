import React, { useState } from "react";
import { BirthdayAndGenderComponent } from '../components/BirthdayAndGenderComponent';

export const BirthdayAndGenderContainer = () => {

    const [selectedMonth, setSelectedMonth] = useState('');

    const handleSelectMonth = (event) => {
        setSelectedMonth(event.target.value);
      };

    return (

        <BirthdayAndGenderComponent
            selectedMonth={selectedMonth}
            handleSelectMonth={handleSelectMonth}
        />

    )

}