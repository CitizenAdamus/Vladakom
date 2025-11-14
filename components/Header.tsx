
import React from 'react';

const VLogo: React.FC = () => (
    <svg preserveAspectRatio="none" viewBox="45.67 21.29 108.66 158.4" className="w-6 h-9 fill-pink-400" role="presentation" aria-hidden="true">
        <g>
            <path d="M100 168.28c5.27 6.93 13.61 11.41 23.01 11.41 30.5 0 28.84-64.75 28.84-73.92 0-15.87-12.91-28.73-28.84-28.73-9.4 0-17.74 4.48-23.01 11.41-5.27-6.93-13.61-11.41-23.01-11.41-15.93 0-28.84 12.86-28.84 28.73 0 9.17-1.65 73.92 28.84 73.92 9.4 0 17.74-4.48 23.01-11.41z" fill="#FF7FE8"/>
            <path d="M100.67 21.29c.57 28.86 24.37 52.09 53.66 52.09-.57-28.86-24.37-52.09-53.66-52.09z" fill="#FF7FE8"/>
            <path d="M45.67 73.38c.57-28.86 24.37-52.09 53.66-52.09-.57 28.87-24.37 52.09-53.66 52.09z" fill="#FF7FE8"/>
            <path fill="#FF7FE8" d="M101 21.29v113h-2v-113h2z"/>
        </g>
    </svg>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#231b3b] shadow-lg">
      <div className="mx-auto max-w-[980px] px-6">
        <div className="flex items-center justify-between h-[76px]">
          <div className="flex items-center space-x-4">
            <VLogo />
            <a href="#" className="text-white font-['Montserrat'] text-[15px] hover:text-pink-400 transition-colors">
              VLADAKOM Leskovac
            </a>
          </div>
          {/* Navigation can be added here */}
        </div>
      </div>
       <div className="w-full h-px bg-gray-100 bg-opacity-50"></div>
    </header>
  );
};

export default Header;
