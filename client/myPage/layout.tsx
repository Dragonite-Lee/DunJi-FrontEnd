import Header from 'components/layout/Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <div className="bg-background_beige h-full min-h-[100vh] sm:w-[375px] sm:m-auto flex flex-col">
      <Header title={title} />

      {children}
    </div>
  );
}

export default Layout;
