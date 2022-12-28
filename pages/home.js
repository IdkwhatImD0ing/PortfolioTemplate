import Hero from '../Components/HomePage/Hero';
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {useWindowSize} from '../Components/page';
import HeroMobile from '../Components/HomePage/HeroMobile';

export default function HomePage() {
  const width = useWindowSize();
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      {width > 1000 ? <Hero /> : <HeroMobile />}
    </>
  );
}
