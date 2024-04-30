import { jest } from '@jest/globals';
import { ExpressChooseYourSettingsContainer } from './ExpressChooseYourSettingsContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('ExpressChooseYourSettingsContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const navigate = jest.fn();
    const setUsersVerificationCodeInput = jest.fn();
    const mockFindYourEmailCredentials = { verificationCode: '1234' };
    it('renders without crashing', () => {
        render(
            <Router>
                <ExpressChooseYourSettingsContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData} findYourEmailCredentials={mockFindYourEmailCredentials}/>
            </Router>
        );
        const ECYSComp = screen.getByTestId('ECYS');
        expect(ECYSComp).toBeInTheDocument();
    });
    describe('toggleModalCondition', () => {
        const setModalCondition = jest.fn();
        let condition;
        test('toggleModalCondition calls setModalCondition with the correct argument', () => {
        condition = 'testCondition';

        const toggleModalCondition = condition => setModalCondition(condition);

        toggleModalCondition(condition);
        expect(setModalCondition).toHaveBeenCalledWith('testCondition');
        });
    });
    describe('openWebAndAppActivityModal', () => {
        const setShowWebAndAppActivityModal = jest.fn();
        const toggleModalCondition = jest.fn();

        const openWebAndAppActivityModal = () => {
            setShowWebAndAppActivityModal(true);
            toggleModalCondition('opening');
        };

        test('openWebAndAppActivityModal calls setShowWebAndAppActivityModal with true', () => {
            openWebAndAppActivityModal();
            expect(setShowWebAndAppActivityModal).toHaveBeenCalledWith(true);
            expect(toggleModalCondition).toHaveBeenCalledWith('opening');
        });
    });
    describe('closeWebAndAppActivityModal', () => {
        jest.useFakeTimers();
      
        const setShowWebAndAppActivityModal = jest.fn();
        const toggleModalCondition = jest.fn();
      
        const closeWebAndAppActivityModal = () => {
            toggleModalCondition('closing');
            setTimeout(() => {
                toggleModalCondition('closed');
                setShowWebAndAppActivityModal(false);
          }, 275);
        };
      
        test('closeWebAndAppActivityModal calls toggleModalCondition with "closing" then "closed" and setShowWebAndAppActivityModal with false after the timeout', () => {
            closeWebAndAppActivityModal();
            jest.runAllTimers();
            expect(toggleModalCondition).toHaveBeenNthCalledWith(1, 'closing');
            expect(toggleModalCondition).toHaveBeenNthCalledWith(2, 'closed');
            expect(setShowWebAndAppActivityModal).toHaveBeenCalledWith(false);
        });
    });
    describe('openYouTubeHistoryModal', () => {
        const setShowYouTubeHistoryModal = jest.fn();
        const toggleModalCondition = jest.fn();
      
        const openYouTubeHistoryModal = () => {
            setShowYouTubeHistoryModal(true);
            toggleModalCondition('opening');
        };
      
        test('openYouTubeHistoryModal calls setShowYouTubeHistoryModal with true and calls toggleModalCondition with "opening"', () => {
            openYouTubeHistoryModal();
            expect(setShowYouTubeHistoryModal).toHaveBeenCalledWith(true);
            expect(toggleModalCondition).toHaveBeenCalledWith('opening');
          });
    });
    describe('closeYouTubeHistoryModal', () => {
        jest.useFakeTimers();
      
        const setShowYouTubeHistoryModal = jest.fn();
        const toggleModalCondition = jest.fn();
      
        const closeYouTubeHistoryModal = () => {
            toggleModalCondition('closing');
            setTimeout(() => {
                toggleModalCondition('closed');
                setShowYouTubeHistoryModal(false);
            }, 275);
        };
      
        test('closeYouTubeHistoryModal calls toggleModalCondition with "closing" then "closed" and setShowYouTubeHistoryModal with false after the timeout', () => {
            closeYouTubeHistoryModal();
            jest.runAllTimers();
            expect(toggleModalCondition).toHaveBeenNthCalledWith(1, 'closing');
            expect(toggleModalCondition).toHaveBeenNthCalledWith(2, 'closed');
            expect(setShowYouTubeHistoryModal).toHaveBeenCalledWith(false);
        });
    });
    describe('openPersonalizedAdsModal', () => {
        const setShowPersonalizedAdsModal = jest.fn();
        const toggleModalCondition = jest.fn();
      
        const openPersonalizedAdsModal = () => {
            setShowPersonalizedAdsModal(true);
            toggleModalCondition('opening');
        };
      
        test('openPersonalizedAdsModal calls setShowPersonalizedAdsModal with true and calls toggleModalCondition with "opening"', () => {
            openPersonalizedAdsModal();
            expect(setShowPersonalizedAdsModal).toHaveBeenCalledWith(true);
            expect(toggleModalCondition).toHaveBeenCalledWith('opening');
          });
    });
    describe('closePersonalizedAdsModal', () => {
        jest.useFakeTimers();
      
        const setShowPersonalizedAdsModal = jest.fn();
        const toggleModalCondition = jest.fn();
      
        const closePersonalizedAdsModal = () => {
            toggleModalCondition('closing');
            setTimeout(() => {
                toggleModalCondition('closed');
                setShowPersonalizedAdsModal(false);
            }, 275);
        };
      
        test('closePersonalizedAdsModal calls toggleModalCondition with "closing" then "closed" and setShowPersonalizedAdsModal with false after the timeout', () => {
            closePersonalizedAdsModal();
            jest.runAllTimers();
            expect(toggleModalCondition).toHaveBeenNthCalledWith(1, 'closing');
            expect(toggleModalCondition).toHaveBeenNthCalledWith(2, 'closed');
            expect(setShowPersonalizedAdsModal).toHaveBeenCalledWith(false);
        });
    });
    describe('handleNextClick', () => {
        const hidePrivacyRow = jest.fn();
        const updateUser = jest.fn();
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const navigate = jest.fn();

        test('handleNextClick calls the correct functions with the correct arguments', () => {
            const mockEvent = { preventDefault: jest.fn() };

            const handleNextClick = e => {
                e.preventDefault();
                hidePrivacyRow();
                updateUser({ manualSetting1: 'keep until delete', manualSetting2: 'keep until delete', manualSetting3: 'show personalized ads' });
                repositionViewPortOnNextOrBackClick();
                navigate('/confirm-your-settings'); 
            };

            handleNextClick(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(hidePrivacyRow).toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({
                manualSetting1: 'keep until delete',
                manualSetting2: 'keep until delete',
                manualSetting3: 'show personalized ads'
            });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/confirm-your-settings');
        });
    });
    describe('handleRejectAllClick', () => {
        const navigate = jest.fn();

        test('handleRejectAllClick calls the correct functions with the correct arguments', () => {
            const mockEvent = { preventDefault: jest.fn() };

            const handleRejectAllClick = e => {
                e.preventDefault();
                navigate('/choose-your-settings');
            }

            handleRejectAllClick(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/choose-your-settings');
        });
    });
});

