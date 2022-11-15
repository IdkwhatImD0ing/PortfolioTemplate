import React from 'react';
import Matrix from '../Components/HomePage/Matrix';
import Topbar from '../Components/Topbar';
import Botbar from '../Components/Botbar';
import EducationDisplay from '../Components/Education/EducationDisplay';

export default function HomePage() {
  return (
    <>
      <Matrix fullscreen={true} speed={1} color="#9D00FF" />
      <EducationDisplay />
      <Topbar />
      <Botbar />
    </>
  );
}
