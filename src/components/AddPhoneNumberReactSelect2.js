import React from 'react';
import Select from 'react-select';
import GBSVG from '../images/flags/gb2.svg';

const AddPhoneNumberReactSelect2 = ({ customStyles, customOptions}) => {
    return (
        <Select
                        styles={customStyles}
                        class='flag-drop-down'
                        options={customOptions}
                        placeholder={
                            <img
                                src={GBSVG}
                                alt="Flag"
                                width="24"
                                height="16"
                            />
                        }
                        isSearchable={false}
                        noOptionsMessage={() => (
                            <img src={GBSVG} alt="Flag" width="24" height="16" />
                        )}
        />
    );
}

export default AddPhoneNumberReactSelect2;