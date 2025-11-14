import React from 'react';

const ReputationSection: React.FC = () => {
    return (
        <section className="bg-[#231b3b]">
            <div className="max-w-[980px] mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center px-8 md:px-16 py-12 md:py-24 order-2 md:order-1">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-7 text-center md:text-left">Stabilnost i reputacija</h2>
                    <div className="space-y-4 text-base text-gray-300">
                        <p>
                            VLADAKOM je osnovana 2018. godine sa jasnom vizijom - postati pouzdan i stabilan partner za sve koji traže kvalitetno voće i povrće. Pod vođstvom osnivača i vlasnika Vladimira Stankovića, kompanija je izrasla u respektovano ime u industriji.
                        </p>
                        <p>
                            Danas zapošljavamo 25 stručnih i posvećenih ljudi koji svakodnevno rade na tome da naši partneri dobiju najbolju moguću uslugu. Naš tim čine stručnjaci sa dugogodišnjim iskustvom u oblasti trgovine voćem i povrćem.
                        </p>
                    </div>
                </div>
                <div className="relative min-h-[500px] md:min-h-[660px] order-1 md:order-2">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/11062b_66bd1d55c36c4eb9b8db106cf691f67e~mv2.jpg')" }}></div>
                    <div className="absolute bottom-1/4 -left-4 md:-left-16 bg-[#3f7652] p-8 rounded-tr-3xl w-full sm:w-auto sm:max-w-md">
                        <h5 className="text-xl font-bold">Bonitet A+</h5>
                        <p className="mt-4 text-base">
                            Naša kompanija posluje sa najvišim bonitenim rejtingom A+, što garantuje finansijsku stabilnost i pouzdanost. Bez ikakvih blokada, sa urednim poslovanjem i transparentnim odnosima sa partnerima.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReputationSection;