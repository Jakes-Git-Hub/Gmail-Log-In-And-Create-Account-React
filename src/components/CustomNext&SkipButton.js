import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomNextAndSkipButton = styled(Button)({
    backgroundColor: 'white',
    color: 'rgb(26,115,232)',
    padding: '8.5px 22.475px',
    fontSize: '15px',
    boxShadow: "none",
    border: "1px solid rgb(219, 219, 219)",
    borderRadius: '4px',
    width: "49%",
    lineHeight: '1rem',
    '&:hover': {
        color: "rgb(23,78,166)",
        backgroundColor: '#f6fafe',
        boxShadow: 'none',    
        '& .MuiTouchRipple-child': {
            color: 'white',
            backgroundColor: '#1b6ef5b3', // Change this to your desired ripple color
        },
    },
    textTransform: 'none',
    margin: 'margin: 7px 1.5px 20px 0;',
    fontWeight: '400',
});

export default CustomNextAndSkipButton;
