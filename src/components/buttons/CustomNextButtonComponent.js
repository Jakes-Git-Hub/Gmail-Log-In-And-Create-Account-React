import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomNextButton = styled(Button)({
    backgroundColor: '#1a73e8',
    color: 'white',
    padding: '5px 25px',
    fontSize: '14px',
    boxShadow: 'none',
    height: '37px',
    '&:hover': {
        color: 'white',
        backgroundColor: 'rgb(34 106 202)',
        boxShadow: ('0px 3px 1px -2px rgba(0,0,0,0.2)', '0px 2px 2px 0px rgba(0,0,0,0.14)', '0px 1px 5px 0px rgba(0,0,0,0.12)'),    
        '& .MuiTouchRipple-child': {
            color: 'white',
            backgroundColor: '#0a1147',
        },
    },
    textTransform: 'none',
    '& .next, & .skip': {
        position: 'relative',
        zIndex: 1,
    },
});

export default CustomNextButton;
