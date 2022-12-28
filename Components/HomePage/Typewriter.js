import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import {useWindowSize} from '../page';

const words = [
  'Full-Stack Developer',
  'Gamer',
  'Software Engineer',
  'Musician',
  'Back-End Developer',
  'Machine Learning Engineer',
];

export default function Typer(props) {
  const width = useWindowSize();
  return (
    <div className={width > 1000 ? 'Desktop' : 'Mobile'}>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
