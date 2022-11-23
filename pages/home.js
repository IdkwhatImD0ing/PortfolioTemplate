import Hero from '../Components/HomePage/Hero';
import React from 'react';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Hero />
    </>
  );
}
