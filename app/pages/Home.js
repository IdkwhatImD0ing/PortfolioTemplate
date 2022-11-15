import Hero from '../Components/HomePage/Hero';
import ShootingStar from '../Components/HomePage/Shootingstar';
import React from 'react';
import Matrix from '../Components/HomePage/Matrix';
import Topbar from '../Components/Topbar';
import Botbar from '../Components/Botbar';

export default function HomePage() {
  return (
    <>
      <Matrix fullscreen={true} speed={1} color="#9D00FF" />
      <Hero />
      <Topbar />
      <Botbar />
    </>
  );
}
