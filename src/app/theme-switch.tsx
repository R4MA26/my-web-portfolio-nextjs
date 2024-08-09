'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='rounded bg-gray-200 p-2 dark:bg-gray-800'
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
