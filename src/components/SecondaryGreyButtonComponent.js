import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryGreyButton = styled(Button)({
    backgroundColor: 'white',
    color: '#1A73E8',
    padding: '',
    fontSize: '14px',
    boxShadow: "none",
    '&:hover': {
        backgroundColor: '#f6fafe',
        boxShadow: ('none'),    
        '& .MuiTouchRipple-child': {
            color: '#3d78c5',
            backgroundColor: '#1c58a8', // Change this to your desired ripple color
        },
    },
    textTransform: 'none',
    margin: 'margin: 7px 1.5px 20px 0;'
});

export default SecondaryGreyButton;
