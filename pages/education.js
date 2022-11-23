import Head from 'next/head';
import React from 'react';

import EducationDisplay from '../Components/Education/EducationDisplay';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Education</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <EducationDisplay />
    </>
  );
}
