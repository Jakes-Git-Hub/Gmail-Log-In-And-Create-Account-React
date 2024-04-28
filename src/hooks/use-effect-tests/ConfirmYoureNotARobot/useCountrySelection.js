import { useEffect } from 'react';
import axios from 'axios';

export const useCountrySelection = (userIP, hasSelectedCYNARCountry, userData, setUsersCountryFlagSVG, setCountryFromAPIOrSelection, actualSelectedOption, filteredCountries, apiKey) => {
    useEffect(() => { 
        if (userIP && hasSelectedCYNARCountry === true) {
            const countryFromSelection = userData.countryDetails;
            if (countryFromSelection) {
                setUsersCountryFlagSVG(countryFromSelection.svg);
                setCountryFromAPIOrSelection({name: countryFromSelection.name, svg:countryFromSelection.svg});
            }
        } else if (userIP && hasSelectedCYNARCountry === false) {
            console.log('actualSelectedOption:', actualSelectedOption)
            axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=102.217.238.0`)
            .then((response) => {
                const countryFromIP = response.data.country_name;
                const matchingCountry = filteredCountries.find(country => country.name === countryFromIP);
                if (matchingCountry) {
                    setUsersCountryFlagSVG(matchingCountry.svg);
                    setCountryFromAPIOrSelection({name: matchingCountry.name, svg:matchingCountry.svg});
                }
            })
            .catch((error) => {
                console.error('Error fetching geolocation data:', error);
            });
        } else {
            console.log('didn\'t work, or still waiting for IP API request');
        }
    }, [userIP, hasSelectedCYNARCountry, userData, setUsersCountryFlagSVG, setCountryFromAPIOrSelection, actualSelectedOption, filteredCountries, apiKey]);
};