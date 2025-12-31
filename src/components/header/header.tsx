import { FC } from 'react';
import Image from 'next/image';

import { HeaderProps } from './header.types';

const Header: FC<HeaderProps> = ({ dataTestId }) => {
  console.log('test');

  return (
    <header className="" data-testid={dataTestId} style={{ height: '83px' }}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5" href="#">
            <span className="sr-only">Your Company</span>

            <Image alt="logo sea click and sun" height={50} src="/logo-sea-click-and-sun.png" width={90} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            type="button"
            onClick={() => console.log(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-4">
            <a
              aria-label="On discute"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              href="#"
            >
              <span>On discute</span>
              <svg
                aria-hidden
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            <button
              aria-label="More actions"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
              type="button"
            >
              <span className="sr-only">More actions</span>
              <svg
                aria-hidden
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 9h14" />
                <path d="M5 15h14" />
              </svg>
            </button>

            <button
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
              type="button"
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                aria-hidden
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
