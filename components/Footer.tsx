
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#231b3b] text-white">
      <div className="border-t border-pink-400 border-opacity-50 bg-[#483778]">
        <div className="max-w-[980px] mx-auto px-6 py-10">
          <p className="font-['Roboto'] text-3xl text-white">
            <a href="#" className="hover:text-pink-300 transition-colors">VLADAKOM Leskovac</a>
          </p>
        </div>
      </div>
      <div className="bg-[#483778]">
        <div className="max-w-[980px] mx-auto px-6 py-5 flex justify-end">
          <p className="text-right text-xs text-gray-300">
            © 2035 by VLADAKOM Leskovac. Powered and secured by Wix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
