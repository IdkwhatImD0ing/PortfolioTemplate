import {Box, Stack} from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Botbar() {
  const router = useRouter();
  // This function is a stack of icone that will be displayed at the bottom of the page.
  return (
    <Box
      height="5vh"
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'fixed',
        bottom: 10,
        left: 0,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={3}
      >
        <Link
          href="https://www.linkedin.com/in/bill-zhang-57976b1b3/"
          target="_blank"
        >
          <Box
            component="img"
            src="/LinkedIn.png"
            width="30px"
            height="30px"
            alt="LinkedIn Logo"
            sx={{
              borderRadius: '50%',
              transform: 'rotate(0deg)',
              transition: 'transform 0.3s ease',

              '&:hover': {
                transform: 'rotate(-10deg)',
                animation: 'wiggle 0.3s ease-in-out infinite',
              },

              '@keyframes wiggle': {
                '0%': {
                  transform: 'rotate(-10deg)',
                },
                '50%': {
                  transform: 'rotate(10deg)',
                },
                '100%': {
                  transform: 'rotate(-10deg)',
                },
              },
            }}
          />
        </Link>
        <Link href="https://github.com/IdkwhatImD0ing/" target="_blank">
          <Box
            component="img"
            src="/github.png"
            width="30px"
            height="30px"
            alt="Github Logo"
            sx={{
              transform: 'rotate(0deg)',
              transition: 'transform 0.3s ease',

              '&:hover': {
                transform: 'rotate(-10deg)',
                animation: 'wiggle 0.3s ease-in-out infinite',
              },

              '@keyframes wiggle': {
                '0%': {
                  transform: 'rotate(-10deg)',
                },
                '50%': {
                  transform: 'rotate(10deg)',
                },
                '100%': {
                  transform: 'rotate(-10deg)',
                },
              },
            }}
          />
        </Link>
        <Link href="https://devpost.com/IdkwhatImD0ing/" target="_blank">
          <Box
            component="img"
            src="/devpost.png"
            width="30px"
            height="30px"
            alt="Devpost Logo"
            sx={{
              transform: 'rotate(0deg)',
              transition: 'transform 0.3s ease',

              '&:hover': {
                transform: 'rotate(-10deg)',
                animation: 'wiggle 0.3s ease-in-out infinite',
              },

              '@keyframes wiggle': {
                '0%': {
                  transform: 'rotate(-10deg)',
                },
                '50%': {
                  transform: 'rotate(10deg)',
                },
                '100%': {
                  transform: 'rotate(-10deg)',
                },
              },
            }}
          />
        </Link>
      </Stack>
    </Box>
  );
}
