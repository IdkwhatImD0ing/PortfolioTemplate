import React from 'react';
import Topbar from '../Components/Topbar';
import Display from '../Components/Skills/Display';
import Matrix from '../Components/HomePage/Matrix';

export default function Skills() {
  return (
    <>
      <Matrix fullscreen={true} speed={1} color="#9D00FF" />
      <Display />
      <Topbar />
    </>
  );
}
