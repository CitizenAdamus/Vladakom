
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[704px] flex items-center justify-center text-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/59d1e5_3a417a83d20b46b18a8836f1c3cbdcc1~mv2.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
          VLADAKOM Leskovac
        </h1>
        <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Pouzdan partner za nabavku svežeg voća i povrća
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
