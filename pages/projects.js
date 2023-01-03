import ProjectDisplay from '../Components/Project/ProjectDisplay';
import Head from 'next/head';
import {WidthContext} from '../Components/page';
import React, {useContext} from 'react';
import ProjectDisplayMobile from '../Components/Project/ProjectDisplayMobile';

export default function Projects() {
  const width = useContext(WidthContext);
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      {width > 1000 ? <ProjectDisplay /> : <ProjectDisplayMobile />}
    </>
  );
}
