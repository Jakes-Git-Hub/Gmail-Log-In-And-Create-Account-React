import React from 'react';
import errorImage from '../images/Daco_5575399.png';

export const BirthdayAndGenderComponent = ({
    month, 
    handleMonthClick,
    handleMonthBlur,
    handleSelectMonth,
    monthPlaceholder,
    day,
    dayPlaceholder,
    handleDayClick,
    handleDayBlur,
    handleSelectDay,
    year,
    yearPlaceholder,
    handleYearClick,
    handleYearBlur,
    handleSelectYear,
    gender,
    handleGenderBlur,
    handleGenderClick,
    handleSelectGender,
    genderPlaceholder,
    handleNextClick,
    incompleteBirthday,
    isImagePreloaded,
    genderEmpty,
    isMonthSelected
}) => {
    
    return (
        <form>

            <h1 class="thin h1-space">Basic Information</h1>

            <h2 class='thin gap'>Enter your birthday and gender</h2>

            <div class='third-container'>
            <label class='space line-height dob-input-width'>
                <select
                    class={`${incompleteBirthday ? 'error-third-adjust-1' : "input-third-adjust-1"} ${isMonthSelected ? 'select-selected' : 'select-color'}`}
                    value={month}
                    onChange={handleSelectMonth}
                    onClick={handleMonthClick}
                    onBlur={handleMonthBlur}
                >
                    <option value="" hidden>{month === '' ? monthPlaceholder : month}</option>
                    <option className="select-dropdown-options" value="January">January</option>
                    <option className="select-dropdown-options" value="February">February</option>
                    <option className="select-dropdown-options" value="March">March</option>
                    <option className="select-dropdown-options" value="April">April</option>
                    <option className="select-dropdown-options" value="May">May</option>
                    <option className="select-dropdown-options" value="June">June</option>
                    <option className="select-dropdown-options" value="July">July</option>
                    <option className="select-dropdown-options" value="August">August</option>
                    <option className="select-dropdown-options" value="September">September</option>
                    <option className="select-dropdown-options" value="October">October</option>
                    <option className="select-dropdown-options" value="Novemeber">Novemeber</option>
                    <option className="select-dropdown-options" value="December">December</option>
                </select>
            </label>

                <label class="space line-height dob-input-width">
                    <input 
                        class={incompleteBirthday ? 'error-third' : "input-third"}
                        type='number' 
                        value={day} 
                        onChange={handleSelectDay} 
                        placeholder={dayPlaceholder}
                        onFocus={handleDayClick}
                        onBlur={handleDayBlur}
                    />
                </label>

                <label class="space line-height dob-input-width">
                    <input 
                        class={incompleteBirthday ? 'error-third' : "input-third"}
                        type='number' 
                        value={year} 
                        onChange={handleSelectYear} 
                        placeholder={yearPlaceholder}
                        onFocus={handleYearClick}
                        onBlur={handleYearBlur}
                    />
                </label>
            </div>

            {incompleteBirthday && isImagePreloaded && (
                <div class='error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Please fill in a complete birthday</p>
                </div>
            )}            
     
            <label class='line-height gender-input-width' id='gender-space'>
                <select
                    class={`select-color ${genderEmpty ? 'error-input-third-adjust' : 'input-third-adjust' }`}
                    value={gender}
                    onChange={handleSelectGender}
                    onClick={handleGenderClick}
                    onBlur={handleGenderBlur}
                >
                    <option value="" hidden>{gender === '' ? genderPlaceholder : gender}</option>
                    <option className="select-dropdown-options" value="Female">Female</option>
                    <option className="select-dropdown-options" value="Male">Male</option>
                    <option className="select-dropdown-options" value="Rather ">Rather not say</option>
                    <option className="select-dropdown-options" value="Custom">Custom</option>
                </select>
            </label>

            {genderEmpty && isImagePreloaded && (
                <div class='error-div' id='error-div-space'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Please select your gender</p>
                </div>
            )}   
            
            <section class='button-right'>
                <button type='button' class="button-space blue-button" onClick={handleNextClick}>
                    Next   
                </button> 
            </section>

        </form>
    )
}