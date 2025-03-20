import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  const router = useRouter();

  const redirectToPage = () => {
    router.push('/page'); // Adjust the path if necessary
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button onClick={redirectToPage}>
        Go to Page
      </Button>
    </div>
  );
}