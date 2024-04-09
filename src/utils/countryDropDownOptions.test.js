import { populateSvgForCountries, filteredCountriesFromUtil } from './countryDropDownOptions';

describe('populateSvgForCountries function', () => {
    test('populates SVG values for countries with abbreviations', () => {
        const countries = [
            { 
                name: 'Andorra', 
                abbreviation: 'ad', 
                dialingCode: '+376', 
                svg: '',
            },
            {
                name: 'United Arab Emirates',
                abbreviation: 'ae',
                dialingCode: '+971',
                svg:'',
            },
            {
                name: 'Afghanistan',
                abbreviation: 'af',
                dialingCode: '+93',
                svg:'',
            },
        ];

        populateSvgForCountries(countries);

        // Assert that SVG values have been populated correctly
        expect(countries[0].svg).toBe('ad.svg');
        expect(countries[1].svg).toBe('ae.svg');
        expect(countries[2].svg).toBe('af.svg');
    });
});

describe('filteredCountriesFromUtil', () => {
    test('filters out countries with empty dialing codes', () => {
        const countries = [
            {
                name: 'Andorra',
                abbreviation: 'ad',
                dialingCode: '+376',
                svg:'',
            },
            {
                name: 'United Arab Emirates',
                abbreviation: 'ae',
                dialingCode: '+971',
                svg:'',
            },
            {
                name: 'Antarctica',
                abbreviation: 'aq',
                dialingCode: '',
                svg:'',
            },
        ];

        // Assert that countries with empty dialing codes are filtered out
        filteredCountriesFromUtil.forEach(country => {
            expect(country.dialingCode).not.toBe('');
        });
    });

});
