import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const FooterGreyButton = styled(Button)({
    id: 'footer-button',
    backgroundColor: 'transparent',
    color: '#3c4043',
    fontWeight: '400',
    padding: '0',
    fontSize: '0.75rem',
    height: '50.25px',
    width: '48px',
    boxShadow: 'none',
    borderRadius: '4px',
    '& .MuiTouchRipple-child': {
        color: 'rgb(26,115,232)',
        backgroundColor: 'transparent', 
    },
    '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'none',    
    },
    textTransform: 'none',
    margin: '0;',
    '& .transparent-small-button': {
        position: 'relative',
        zIndex: 1,
    },
    '&:active': {
        '& .MuiTouchRipple-child': {
            color: 'none',
            backgroundColor: 'transparent', 
        },
    },
    '&:focus': {
        backgroundColor: '#e0e0e0;',
        '& .MuiTouchRipple-child': {
            color: 'none',
            backgroundColor: 'transparent', 
        },
    },
});

export default FooterGreyButton;