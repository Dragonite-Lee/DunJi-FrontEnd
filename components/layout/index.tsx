import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from './Nav';

type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  const router = useRouter();
  useEffect(() => {
    const handleResize = function () {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <div>{children}</div>;
}

export default AppLayout;
