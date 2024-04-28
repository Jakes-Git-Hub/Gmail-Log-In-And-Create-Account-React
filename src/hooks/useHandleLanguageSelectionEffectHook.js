import { useEffect } from 'react';

export const useHandleLanguageSelectionEffectHook = (handleLanguageSelection, userData) => {
  useEffect(() => {
    handleLanguageSelection();
    console.log('chosenLanguage:', userData.language);
  }, [userData.language]);
};