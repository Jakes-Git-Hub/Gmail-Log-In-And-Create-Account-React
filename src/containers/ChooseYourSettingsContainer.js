import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChooseYourSettingsComponent } from "../components/ChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';

export const ChooseYourSettingsContainer = ({ userData, updateUser }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null); 

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Handle Radio Change

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    }

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/choose-your-settings'); 
    };

// MUI Custom Styles

    const CustomRadio = styled(Radio)({
        
    });


    return(
        <>
            <ChooseYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                CustomRadio={CustomRadio}
                selectedValue={selectedValue}
                handleRadioChange={handleRadioChange}
            />
        </>
    );
};
