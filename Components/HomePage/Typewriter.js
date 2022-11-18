import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';

const words = [
  'Full-Stack Developer',
  'Gamer',
  'Software Engineer',
  'Musician',
  'Back-End Developer',
  'Developer',
];

export default function Typer() {
  return (
    <div className="Typewriter">
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
