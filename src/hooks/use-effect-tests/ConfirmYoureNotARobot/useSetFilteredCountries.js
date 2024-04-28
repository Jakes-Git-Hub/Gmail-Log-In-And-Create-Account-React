import { useEffect } from 'react';

export const useSetFilteredCountries = (setFilteredCountries, translatedCountries) => {
    useEffect(() => {
        setFilteredCountries(translatedCountries);
    }, [setFilteredCountries, translatedCountries]);
};