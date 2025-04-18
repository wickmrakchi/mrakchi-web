import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDarkMode } from '../hooks/useDarkMode';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;