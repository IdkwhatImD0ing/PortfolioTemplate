import React from 'react';
import ProjectDisplay from '../Components/Project/ProjectDisplay';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <ProjectDisplay />
    </>
  );
}
