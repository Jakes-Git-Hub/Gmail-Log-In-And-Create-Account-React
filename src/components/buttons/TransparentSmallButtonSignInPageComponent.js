import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const TransparentSmallButtonSignInPage = styled(Button)({
    backgroundColor: 'transparent',
    color: 'rgb(26,115,232)',
    padding: '0',
    fontSize: '0.875rem',
    boxShadow: 'none',
    borderRadius: '2px',
    '& .MuiTouchRipple-child': {
        color: 'rgb(26,115,232)',
        backgroundColor: 'transparent', 
    },
    '&:hover': {
        color: 'rgb(26,115,232)',
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
        color: 'rgb(23,78,166)',
        '& .MuiTouchRipple-child': {
            color: 'rgb(26,115,232)',
            backgroundColor: 'transparent', 
        },
    },
    '&:focus': {
        color: 'rgb(23,78,166)',
        backgroundColor: 'rgba(26,115,232,0.149)',
        '& .MuiTouchRipple-child': {
            color: 'rgb(26,115,232)',
            backgroundColor: 'transparent', 
        },
    },
});

export default TransparentSmallButtonSignInPage;