import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';

const words = [
  'Software Engineer',
  'Web Developer',
  'Full Stack Developer',
  'React Developer',
  'JavaScript Developer',
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
