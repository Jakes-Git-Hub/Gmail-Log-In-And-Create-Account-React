import { jest } from '@jest/globals';
import axios from 'axios';

jest.mock('axios');

// Mock users data
const users = [
  { email: 'test1@example.com', password: 'password1' },
];

const email = 'test1@example.com';
const password = 'password1';

const emailClicked = 'test1@example.com';

const prevData = { name: 'John', age: 30 };
const data = { name: 'John', age: 31, country: 'England' };

const prevFindEmailCreds = {};
const findEmailCreds = {email: 'email'};

describe('app.js', () => {
    describe('handleLanguageSelection', () => {
        it('handles language selection correctly', async () => {
            const userData = { language: 'en' };
            const filteredCountriesFromUtil = [{ name: 'Country1' }, { name: 'Country2' }];
            const changeLanguageAndTranslate = jest.fn().mockResolvedValue('TranslatedName');
            const sanitizeCountryNames = jest.fn().mockReturnValue([{ name: 'TranslatedName' }]);
            const setTranslatedCountries = jest.fn();
            const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

            const handleLanguageSelection = async () => {
                if (!userData.language) return;
                const chosenLanguage = userData.language;
            
                try {
            
                    const newTranslatedCountries = await Promise.all(filteredCountriesFromUtil.map(async (country) => {
                        const translatedName = await changeLanguageAndTranslate(country.name, chosenLanguage);
                        return { ...country, name: translatedName };
                    }));
            
                    const sanitizedTranslatedCountries = sanitizeCountryNames(newTranslatedCountries);
            
                    const orderedSanitizedTranslatedCountries = [...sanitizedTranslatedCountries].sort((a, b) => a.name.localeCompare(b.name));
            
                    // Update the translatedCountries state with new translated countries
                    setTranslatedCountries(orderedSanitizedTranslatedCountries);
            
                } catch (error) {
                    console.error('Error translating text:', error);
                }
            }

            await handleLanguageSelection();
            
            expect(changeLanguageAndTranslate).toHaveBeenCalled();
            expect(sanitizeCountryNames).toHaveBeenCalled();
            expect(setTranslatedCountries).toHaveBeenCalled();
            expect(consoleError).not.toHaveBeenCalledWith('Error translating text:', new Error('Error'));
        });
    });
    describe('changeLanguageAndTranslate', () => {
        it('should translate text correctly', async () => {
            global.googleAPIKey = '8Z2JXzv9KjyS4s8aZsEaI_DUNWuE_bKGSjYiA2';
            const text = 'England';
            const chosenLanguage = 'es';
            const updateUser = jest.fn();
            const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
            axios.post.mockRejectedValue(new Error('Error'));
            const mockResponse = {
            data: {
                data: {
                translations: [{ translatedText: 'Inglaterra' }],
                },
            },
            };
            axios.post.mockResolvedValue(mockResponse);

            const changeLanguageAndTranslate = async (text, chosenLanguage) => {
                updateUser({ language: chosenLanguage })
                try {
                const res = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${googleAPIKey}`, {
                    q: text,
                    target: chosenLanguage,
                });
                return res.data.data.translations[0].translatedText;
                } catch (error) {
                console.error('Error translating text:', error);
                return null;
                }
            };  
      
            const result = await changeLanguageAndTranslate(text, chosenLanguage);
        
            expect(updateUser).toHaveBeenCalledWith({ language: chosenLanguage });
            expect(axios.post).toHaveBeenCalled();
            expect(result).toEqual('Inglaterra');
            expect(consoleError).not.toHaveBeenCalledWith('Error translating text:', new Error('Error'));
        });
    });
    describe('sanitizeCountryNames', () => {
        it('should replace &#39; with an apostrophe in country names', () => {
          const countries = [
            { name: 'C&#39;te d&#39;Ivoire', population: 25069229 },
            { name: 'Saint Kitts and Nevis', population: 53199 },
          ];
      
          const expected = [
            { name: "C'te d'Ivoire", population: 25069229 },
            { name: 'Saint Kitts and Nevis', population: 53199 },
          ];

          const sanitizeCountryNames = (countries) => {
            const sanitizedCountries = countries.map(country => ({
              ...country,
              name: country.name.replace(/&#39;/g, "'")
            }));
        
            return sanitizedCountries;
          };
      
          const result = sanitizeCountryNames(countries);
      
          expect(result).toEqual(expected);
        });
      });
    describe('handleLogin', () => {
        it('Checks if Login Credentials are Correct', () => {
            const handleLogin = jest.fn().mockImplementation((email, password) => {
                return users.find(user => user.email === email && user.password === password);
            });

            handleLogin(email, password);
            
            const correctLoginCredentials = users.find(
                (user) => user.email === email && user.password === password
            );

            expect(correctLoginCredentials).toBeTruthy();
            expect(handleLogin).toHaveBeenCalledWith(email, password);
        });
    });
    describe('handleListItemLogIn', () => {
        it('Finds User from list of Accounts', () => {

            const handleListItemLogIn = jest.fn().mockImplementation(emailClicked => {
                return users.find(user => user.email === emailClicked);
            }); 

            handleListItemLogIn(emailClicked);  
            
            const userForEmailClicked = users.find(user => user.email === emailClicked);

            expect(userForEmailClicked).toBeTruthy();
            expect(handleListItemLogIn).toHaveBeenCalledWith(email);
        });
    });
    describe('updateUser', () => {
        it('Updates the user data if it has changed', () => {
            const updateUser = jest.fn().mockImplementation((data, prevData) => {
                const isDataChanged = Object.keys(data).some(key => data[key] !== prevData[key]);
                if (isDataChanged) {
                return { ...prevData, ...data };
                } else {
                return prevData;
                }
            });

            const result = updateUser(data, prevData);
    
            expect(result).toEqual({ name: 'John', age: 31, country: 'England' });
        });
    
        it('Does not update the user data if it has not changed', () => {
            const updateUser = jest.fn().mockImplementation((data, prevData) => {
                const isDataChanged = Object.keys(data).some(key => data[key] !== prevData[key]);
                if (isDataChanged) {
                return { ...prevData, ...data };
                } else {
                return prevData;
                }
            });
            const sameData = { name: 'John', age: 30 };
            const result = updateUser(sameData, prevData);
        
            expect(result).toEqual(prevData);
        });
    });
    describe('updateFindYourEmailCredentials', () => {
        it('Updates the Find Your Email Credentials if it has changed', () => {
            const updateFindYourEmailCredentials = jest.fn().mockImplementation((findEmailCreds, prevFindEmailCreds) => {
                const isfindEmailCredsChanged = Object.keys(findEmailCreds).some(key => findEmailCreds[key] !== prevFindEmailCreds[key]);
                  if (isfindEmailCredsChanged) {
                    // If the findEmailCreds has changed, return the new findEmailCreds to update the state
                    return { ...prevFindEmailCreds, ...findEmailCreds };
                  } else {
                    // If the findEmailCreds hasn't changed, return the previous findEmailCreds to prevent a state update
                    return prevFindEmailCreds;
                  }
            });

            const result = updateFindYourEmailCredentials(findEmailCreds, prevFindEmailCreds);
    
            expect(result).toEqual({email: 'email'});
        });
    
        it('Does not update the Find Your Email Credentials if it has not changed', () => {
            const updateFindYourEmailCredentials = jest.fn().mockImplementation((findEmailCreds, prevFindEmailCreds) => {
                const isfindEmailCredsChanged = Object.keys(findEmailCreds).some(key => findEmailCreds[key] !== prevFindEmailCreds[key]);
                if (isfindEmailCredsChanged) {
                return { ...prevFindEmailCreds, ...findEmailCreds };
                } else {
                return prevFindEmailCreds;
                }
            });
            const samefindEmailCreds = {};
            const result = updateFindYourEmailCredentials(samefindEmailCreds, prevFindEmailCreds);
        
            expect(result).toEqual(prevFindEmailCreds);
        });
    });
    
});

