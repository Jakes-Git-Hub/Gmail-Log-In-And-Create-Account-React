import { useEffect } from 'react';

const useNewTopOption = (filteredCountries, countryFromAPIOrSelection, selectedOption, setTopOption, setFilteredCountries) => {
    useEffect(() => {
        const newTopOption = filteredCountries && Array.isArray(filteredCountries) 
            ? filteredCountries.find(country => country.svg === countryFromAPIOrSelection.svg) 
            : 'United Kingdom';
        setTopOption(newTopOption);
        const newFilteredCountries = Array.isArray(filteredCountries) 
            ? filteredCountries.sort((a, b) => a.name.localeCompare(b.name)) 
            : [];
        setFilteredCountries(newFilteredCountries);
    }, [selectedOption, countryFromAPIOrSelection]);
}

export default useNewTopOption;