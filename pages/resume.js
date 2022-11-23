import dynamic from 'next/dynamic';
const ResumeDisplay = dynamic(() => import('../Components/ResumeDisplay'), {
  ssr: false,
});
export default function Resume() {
  return <ResumeDisplay />;
}
