'use client';

import ThemeSwitcher from '../theme-switch';

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <div className='flex items-center justify-between p-4 pb-4'>
        <div className='text-2xl font-bold'>Rama Ismaya S</div>
        <div className='hidden space-x-8 text-lg md:flex'>
          <a href='#' className='hover:text-gray-700 dark:hover:text-gray-300'>
            About
          </a>
          <a href='#' className='hover:text-gray-700 dark:hover:text-gray-300'>
            Skills
          </a>
        </div>
        <ThemeSwitcher />
      </div>
      <div className='border-t border-gray-300 dark:border-gray-700'></div>
    </nav>
  );
}
