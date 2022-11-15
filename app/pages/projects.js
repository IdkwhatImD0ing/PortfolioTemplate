import React from 'react';
import Botbar from '../Components/Botbar';
import ProjectDisplay from '../Components/Project/ProjectDisplay';
import Topbar from '../Components/Topbar';

export default function Projects() {
  return (
    <>
      <ProjectDisplay />
      <Topbar />
      <Botbar />
    </>
  );
}
