import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReviewYourAccountInfoComponent } from '../components/ReviewYourAccountInfoComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface LanguageStrings {
    [key: string]: string;
}

interface NestedTextObject {
    [key: string]: LanguageStrings;
}

interface TextData {
    [key: string]: NestedTextObject;
}

interface ReviewYourAccountInfoContainerProps {
    userData: {
        profileCircleColor?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        language: string;
        [key: string]: any;
    };
    updateUser: (data: { [key: string]: any }) => void;
    text: TextData;
}

export const ReviewYourAccountInfoContainer: React.FC<ReviewYourAccountInfoContainerProps> = ({ userData, updateUser, text }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    // Change Language
    const handleLanguageSelection = (chosenLanguage: string) => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        updateUser({ language: chosenLanguage });
    };

    // Assign Users Profile Circle Color
    useEffect(() => {
        if (!userData.profileCircleColor) {
            profileCircleColor();
        }
    }, [userData]);

    const profileCircleColor = () => {
        console.log('profileCircleColor running');
        let randomColor: string;
        let brightness: number;
        do {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            const r = parseInt(randomColor.substring(1, 3), 16);
            const g = parseInt(randomColor.substring(3, 5), 16);
            const b = parseInt(randomColor.substring(5, 7), 16);
            brightness = (r * 299 + g * 587 + b * 114) / 1000;
        } while (brightness > 200);
        updateUser({ profileCircleColor: randomColor });
    };

    // Handle Next Click
    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/choose-your-settings'); 
    };

    return(
        <>
            <ReviewYourAccountInfoComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
            />
        </>
    );
};