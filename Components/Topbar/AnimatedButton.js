import {Button} from '@mui/material';

export default function AnimatedButton(props) {
  return (
    <Button
      disableRipple
      onClick={props.onClick}
      sx={{
        ':after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: '100%',
          bottom: 0,
          height: '2px',
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
        },
        ':hover:after': {
          right: 0,
        },
        ':before': {
          content: '""',
          position: 'absolute',
          left: '100%',
          right: 0,
          top: 0,
          height: '2px',
          backgroundColor: 'white',
          transition: 'all 0.3s ease',
        },
        ':hover:before': {
          left: 0,
        },
      }}
    >
      {props.children}
    </Button>
  );
}
