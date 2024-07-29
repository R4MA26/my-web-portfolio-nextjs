"use client";

import ThemeSwitcher from "../theme-switch";

export function Navbar() {
  return (
    <div>
      <nav className="p-4">
        <div className="flex px-4 justify-between items-center">
          <div className="text-2xl font-bold">Rama Ismaya S</div>
          <div className="hidden md:flex space-x-8 text-lg">
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300"
            >
              Skills
            </a>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
      <div className="border-t border-gray-300 dark:border-gray-700"></div>
    </div>
  );
}
