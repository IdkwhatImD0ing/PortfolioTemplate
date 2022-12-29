import React, {useContext, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import {WidthContext} from '../page';

const words = [
  'Full-Stack Developer',
  'Gamer',
  'Software Engineer',
  'Musician',
  'Back-End Developer',
  'Machine Learning Engineer',
];

export default function Typer(props) {
  const width = useContext(WidthContext);
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
