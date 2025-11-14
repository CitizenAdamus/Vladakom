
import React from 'react';

const WhyUsSection: React.FC = () => {
    const advantages = [
        'Brza i sigurna isporuka',
        'Stalno dostupan asortiman',
        'Konkurentne veleprodajne cene',
        'Mogućnost dugoročnih ugovora',
        'Fleksibilni uslovi plaćanja',
    ];

    const offerings = [
        'Sezonsko i egzotično voće',
        'Sveže domaće i uvozno povrće',
        'Organizovan transport i logistiku',
        'Stručnu podršku i konsultacije',
        'Redovne isporuke bez prekida',
    ];

    return (
        <section className="bg-[#231b3b] py-16 md:py-24">
            <div className="max-w-[980px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Prednosti saradnje</h3>
                    <ul className="space-y-4 text-base text-gray-300 list-disc list-inside">
                        {advantages.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-center mb-8">Šta nudimo</h3>
                    <ul className="space-y-4 text-base text-gray-300 list-disc list-inside">
                        {offerings.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
