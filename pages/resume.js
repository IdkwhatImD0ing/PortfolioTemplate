import dynamic from 'next/dynamic';
const ResumeDisplay = dynamic(() => import('../Components/ResumeDisplay'), {
  ssr: false,
});
import Head from 'next/head';
export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResumeDisplay />
    </>
  );
}
