import React from 'react';

export const BirthdayAndGenderComponent = ({ selectedMonth, handleSelectMonth}) => {
    
    return (
        <form>

            <h1 class="thin space">Basic Information</h1>

            <h2 class='thin gap'>Enter your birthday and gender</h2>

            <label class="space line-height label-input-width input-label">
                <select class='input' value={selectedMonth} onChange={handleSelectMonth}>
                    <option value="option1">January</option>
                    <option value="option2">Febuary</option>
                    <option value="option3">March</option>
                    <option value="option4">April</option>
                    <option value="option5">May</option>
                    <option value="option6">June</option>
                    <option value="option7">July</option>
                    <option value="option8">August</option>
                    <option value="option9">September</option>
                    <option value="option10">October</option>
                    <option value="option11">Novemeber</option>
                    <option value="option12">December</option>
                </select>
                {/* <input 
                    class="input"
                    type='text' 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder={firstNamePlaceholder}
                    onFocus={handleFirstNameClick}
                    onBlur={handleFirstNameBlur}
                /> */}
            </label>
     
            <label class="space line-height label-input-width input-label">
                {/* <input 
                    class="input disable-eye-icon"
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={lastNamePlaceholder}
                    onFocus={handleLastNameClick}
                    onBlur={handleLastNameBlur}
                /> */}
            </label>
            
            <section class='button-right'>
                {/* <button class="space blue-button" handleNextClick={handleNextClick}>
                    Next   
                </button> */}
            </section>

        </form>
    )
}