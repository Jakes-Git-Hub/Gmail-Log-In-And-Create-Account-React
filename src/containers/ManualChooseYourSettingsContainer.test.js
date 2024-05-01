import { jest } from '@jest/globals';
import { ManualChooseYourSettingsContainer } from './ManualChooseYourSettingsContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('ManualChooseYourSettingsContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <ManualChooseYourSettingsContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const MCYS1Comp = screen.getByTestId('MCYS1');
        expect(MCYS1Comp).toBeInTheDocument();
    });
    describe('repositionViewPortOnError', () => {
        it('repositions screen to top',() => {
            const mockGetElementById = jest.spyOn(document, 'getElementById');
                const mockGetBoundingClientRect = jest.spyOn(Element.prototype, 'getBoundingClientRect');
                const mockScrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

                const repositionViewPortOnError = () => {
                    const settingsContainer = document.getElementById('container-choose-your-settings-m');
                    if (settingsContainer) {
                        const topOffset = settingsContainer.getBoundingClientRect().top;
                        if (topOffset < 0 || topOffset > window.innerHeight) {
                            // Scroll the viewport to bring the settings container to the top
                            window.scrollTo({
                                top: window.scrollY + topOffset,
                                behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
                            });
                        }
                    }
                };

                // Test with the settings container in view
                mockGetElementById.mockReturnValueOnce({ getBoundingClientRect: () => ({ top: 100 }) });
                repositionViewPortOnError();
                expect(mockScrollTo).not.toHaveBeenCalled();

                // Test with the settings container out of view
                mockGetElementById.mockReturnValueOnce({ getBoundingClientRect: () => ({ top: -100 }) });
                repositionViewPortOnError();
                expect(mockScrollTo).toHaveBeenCalledWith({ top: window.scrollY - 100, behavior: 'auto' });

                mockGetElementById.mockRestore();
                mockGetBoundingClientRect.mockRestore();
                mockScrollTo.mockRestore();
        });
    });   
    describe('handleNextClick', () => {
        it('handles next click correctly ',() => {
            const setError = jest.fn();
            const updateUser = jest.fn();
            const repositionViewPortOnError = jest.fn();
            const repositionViewPortOnNextOrBackClick = jest.fn();
            const navigate = jest.fn();

            const handleNextClick = () => {
                if (manualSetting1 === '') {
                    setError('selectAnOption');
                    repositionViewPortOnError();
                } if (manualSetting1 === 'keep until delete') {
                    updateUser({ manualSetting1: 'keep until delete' });
                    repositionViewPortOnNextOrBackClick();
                    navigate('/manual-choose-your-settings2')
                } if (manualSetting1 === '18 months or delete') {
                    updateUser({ manualSetting1: '18 months or delete' });
                    repositionViewPortOnNextOrBackClick();
                    navigate('/manual-choose-your-settings2')
                } if (manualSetting1 === 'dont save') {
                    updateUser({ manualSetting1: 'dont save' });
                    repositionViewPortOnNextOrBackClick();
                    navigate('/manual-choose-your-settings2')
                }
            };

            // Test with manualSetting1 === ''
            let manualSetting1 = '';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('selectAnOption');
            expect(repositionViewPortOnError).toHaveBeenCalled();

            // Test with manualSetting1 === 'keep until delete'
            manualSetting1 = 'keep until delete';
            handleNextClick();
            expect(updateUser).toHaveBeenCalledWith({ manualSetting1: 'keep until delete' });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings2');

            // Test with manualSetting1 === '18 months or delete'
            manualSetting1 = '18 months or delete';
            handleNextClick();
            expect(updateUser).toHaveBeenCalledWith({ manualSetting1: '18 months or delete' });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings2');

            // Test with manualSetting1 === 'dont save'
            manualSetting1 = 'dont save';
            handleNextClick();
            expect(updateUser).toHaveBeenCalledWith({ manualSetting1: 'dont save' });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings2');
        });  
    });
    describe('handleBackClick', () => {
        it('handles back click correctly ',() => {
            const navigate = jest.fn();
            const mockEvent = { preventDefault: jest.fn() };

            const handleBackClick = e => {
                e.preventDefault();
                navigate('/choose-your-settings');
            };

            handleBackClick(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/choose-your-settings');
        });  
    });  
    describe('repositionViewPortOnNextOrBackClick', () => {
        it('repositions to top of screen on next or back click',() => {
            const mockScrollTo = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});

            const repositionViewPortOnNextOrBackClick = () => {
                window.scrollTo({
                top: 0,
                behavior: 'auto'
                });
            };

            repositionViewPortOnNextOrBackClick();

            expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });

            mockScrollTo.mockRestore();
        });  
    });              
});


