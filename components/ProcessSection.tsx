
import React from 'react';
import { SmileIcon, GlobeIcon, PowerIcon, BoltIcon } from './icons/ProcessIcons';

const ProcessItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 text-white">{icon}</div>
        <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-base text-gray-300 leading-relaxed">{description}</p>
        </div>
    </div>
);

const ProcessSection: React.FC = () => {
    return (
        <section className="bg-[#231b3b] py-16 md:py-24">
            <div className="max-w-[980px] mx-auto px-6 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    <ProcessItem 
                        icon={<SmileIcon />} 
                        title="Provera dobavljača" 
                        description="Sarađujemo samo sa proverenim i licenciranim dobavljačima koji garantuju poreklo i kvalitet proizvoda."
                    />
                    <ProcessItem 
                        icon={<PowerIcon />} 
                        title="Skladištenje" 
                        description="Moderno opremljeni skladišni prostori sa kontrolisanom temperaturom za očuvanje maksimalne svežine."
                    />
                    <ProcessItem 
                        icon={<GlobeIcon />} 
                        title="Transport" 
                        description="Brza isporuka rashladnim vozilima direktno do vašeg objekta, uz praćenje temperature tokom prevoza."
                    />
                     <ProcessItem 
                        icon={<BoltIcon />} 
                        title="Priprema i pakovanje" 
                        description="Stručna selekcija, sortiranje i pakovanje prema potrebama svakog klijenta posebno."
                    />
                </div>
                <div className="text-center pt-8">
                     <p className="text-xl text-center max-w-4xl mx-auto text-gray-300">
                        Svaki korak u našem poslovanju osmišljen je tako da vam pruži maksimalan nivo sigurnosti i zadovoljstva. Od trenutka kada roba napusti dobavljača do trenutka kad stigne do vas, sve je pod našom kontrolom i odgovornošću.
                    </p>
                    <div className="bg-white/80 p-12 mt-12 text-center">
                        <p className="text-2xl font-bold text-gray-800">
                            Istražite naše usluge i unapredite svoj lanac snabdevanja proizvodima već danas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
