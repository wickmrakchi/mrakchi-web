import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useDarkMode = (): [boolean, () => void] => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has a preference stored
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on preference or system setting
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(prefersDark);
    }
    
    // Apply theme to document
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => {
      const newMode = !prev;
      const newTheme: Theme = newMode ? 'dark' : 'light';
      
      // Store preference
      localStorage.setItem('theme', newTheme);
      
      // Apply theme
      applyTheme(newTheme);
      
      return newMode;
    });
  };

  const applyTheme = (theme: Theme): void => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return [darkMode, toggleDarkMode];
};