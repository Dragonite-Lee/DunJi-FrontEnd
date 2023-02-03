import { ReactNode } from 'react';
import Header from 'components/layout/Header';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <div className="bg-background_beige h-full min-h-[100vh] sm:w-[375px] sm:m-auto flex flex-col flex-1">
      <Header title={title} />

      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}

export default Layout;
