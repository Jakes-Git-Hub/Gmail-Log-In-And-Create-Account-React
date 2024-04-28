import { useEffect, useState } from 'react';

const useCountryOption = (filteredCountries, countryFromAPIOrSelection, hasSelectedCYNARCountry) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        const countryOption = filteredCountries && Array.isArray(filteredCountries) 
            ? filteredCountries.find(country => country.svg === countryFromAPIOrSelection.svg)
            : undefined;
        if (countryOption && hasSelectedCYNARCountry === false) {
            setSelectedOption({
                value: countryOption,
                label: countryOption.name,
            });
            console.log('countryOption:', countryOption);
        } 
    }, [countryFromAPIOrSelection, hasSelectedCYNARCountry, filteredCountries]);

    return selectedOption;
};

export default useCountryOption;