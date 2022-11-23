import dynamic from 'next/dynamic';
const ResumeDisplay = dynamic(() => import('../components/ResumeDisplay'), {
  ssr: false,
});
export default function Resume() {
  return <ResumeDisplay />;
}
