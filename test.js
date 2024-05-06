const handleNextClick = () => {
    const phoneNumberInput = document.getElementById('phoneNumberInput');      
    if (phoneNumber === '') {
        setError('phoneNumberEmpty');
        phoneNumberInput.focus();
    } else if (!/^\+?[0-9]+$/.test(phoneNumber)) {
        setError('incorrectFormat');
        phoneNumberInput.focus();
    } else {
        if (actualSelectedOption) {
            const convertedLocalNumber = convertPhoneNumber(phoneNumber, selectedOption.value.abbreviation, PhoneNumberFormat.NATIONAL);
            const isLocalNumberAlreadyRegistered = users.some(user => user.phoneNumber.includes(convertedLocalNumber));
            if (isLocalNumberAlreadyRegistered) {
            setError('alreadyRegistered');
            }
        } else {
            const sequences = generateSequences(phoneNumber);
            const isPhoneNumberAlreadyRegistered = users.some(user => sequences.some(sequence => user.phoneNumber.includes(sequence)));
            if (isPhoneNumberAlreadyRegistered) {
            setError('alreadyRegistered');
            }
        }
    
        // Moved logic inside the existing else block for better structure
        if (actualSelectedOption) {
            const formattedPhoneNumber = selectedOption.value.dialingCode + phoneNumber;
            updateUser({ phoneNumber: formattedPhoneNumber, countryDetails: selectedOption.value });
            handleCYNARCountrySelect();
            setError(null);
        } else {
            const formattedPhoneNumber = phoneNumber;
            updateUser({ phoneNumber, countryDetails: unitedKingdom });
            handleCYNARCountrySelect();
            setError(null);
        }
    }
};