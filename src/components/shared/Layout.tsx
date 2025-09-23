import type { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-cocoa-900 transition-colors">
      <Navigation />
      <main className="pt-16 bg-gradient-to-b from-cream-50 to-cream-100 dark:from-cocoa-900 dark:to-cocoa-800">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;