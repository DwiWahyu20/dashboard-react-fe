'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
export default function Home() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Button onClick={navigateToDashboard}>Go to Page</Button>
    </div>
  );
}