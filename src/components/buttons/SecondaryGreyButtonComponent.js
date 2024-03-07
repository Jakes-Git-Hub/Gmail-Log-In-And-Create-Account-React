import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryGreyButton = styled(Button)({
    backgroundColor: 'white',
    color: '#1A73E8',
    padding: '7.5px 8.75px',
    fontSize: '14px',
    boxShadow: "none",
    '&:hover': {
        backgroundColor: '#f3faff',
        color: "#1f5cab",
        boxShadow: 'none',    
        '& .MuiTouchRipple-child': {
            color: "red !important",
            backgroundColor: '#69aaffeb', // Change this to your desired ripple color
        },
    },
    textTransform: 'none',
    '& .get-new-code-text': {
        position: 'relative',
        zIndex: 1,
    },
});

export default SecondaryGreyButton;
