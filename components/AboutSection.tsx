
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#231b3b]">
      <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 md:px-16 py-12 md:py-24">
          <h4 className="text-3xl font-bold mb-7">Trgovina na veliko voćem i povrćem</h4>
          <div className="space-y-4 text-base text-gray-300">
            <p>
              VLADAKOM je vodeća trgovinska kompanija specijalizovana za veleprodaju svežeg voća i povrća na teritoriji Srbije. Sa sedištem u Leskovcu, pružamo kompletnu uslugu uvoza i distribucije najkvalitetnijeg svežeg voća i povrća.
            </p>
            <p>
              Naša misija je da lokalnim trgovcima, restoranima i distributerima obezbedimo pouzdan izvor svežih proizvoda uz konkurentne cene i brzu isporuku. Garantujemo kvalitet, pouzdanost i kontinuitet u snabdevanju.
            </p>
            <p>
              Radimo sa renomiranim dobavljačima iz regiona i šire, osiguravajući da svaki proizvod koji stigne do naših partnera zadovoljava najviše standarde svežine i kvaliteta.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-[#231b3b] text-pink-400 border border-pink-400 rounded-full px-8 py-3 text-base font-bold hover:bg-pink-400 hover:text-[#231b3b] transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="min-h-[500px] md:min-h-0 bg-cover bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/59d1e5_0c8927b69d5b439d90a422a93dd12d49~mv2.jpg')" }}>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
