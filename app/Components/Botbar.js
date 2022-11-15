import {Box, Stack} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Botbar() {
  const router = useRouter();
  // This function is a stack of icone that will be displayed at the bottom of the page.
  return (
    <Box
      height="5vh"
      width="100vw"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'fixed',
        bottom: 0,
        left: 0,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={2}
      >
        <Link
          href="https://www.linkedin.com/in/bill-zhang-57976b1b3/"
          target="_blank"
        >
          <Image src="/LinkedIn.png" width="30" height="30" />
        </Link>
        <Link href="https://github.com/IdkwhatImD0ing/" target="_blank">
          <Image src="/github.png" width="30" height="30" />
        </Link>
        <Link href="https://devpost.com/IdkwhatImD0ing/" target="_blank">
          <Image src="/devpost.png" width="30" height="30" />
        </Link>
      </Stack>
    </Box>
  );
}
