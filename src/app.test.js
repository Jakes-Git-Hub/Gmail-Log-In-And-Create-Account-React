import { jest } from '@jest/globals';

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