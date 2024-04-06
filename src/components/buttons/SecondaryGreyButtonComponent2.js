import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryGreyButton2 = styled(Button)({
    backgroundColor: 'transparent',
    color: '#1A73E8',
    padding: '7.5px 8.75px',
    fontSize: '14px',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: '#f6fafe',
        color: '#1f5cab',
        boxShadow: 'none',    
        '& .MuiTouchRipple-child': {
            backgroundColor: '#9b9898',
        },
    },
    textTransform: 'none',
    marginRight: '24px',
    '& .got-it-text': {
        position: 'relative',
        zIndex: 1,
    },
});

export default SecondaryGreyButton2;
