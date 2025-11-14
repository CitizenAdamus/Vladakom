
import React from 'react';

const StatItem: React.FC<{ value: string; title: string; description: string }> = ({ value, title, description }) => (
    <div className="text-center">
        <p className="text-7xl lg:text-8xl font-bold">{value}</p>
        <h6 className="mt-4 text-xl font-bold">{title}</h6>
        <p className="mt-2 text-base text-gray-300">{description}</p>
    </div>
);

const StatsSection: React.FC = () => {
    const stats = [
        { value: 'A+', title: 'Bonitet rejting', description: 'Najviši nivo finansijske stabilnosti i pouzdanosti u poslovanju' },
        { value: '25', title: 'Zaposlenih', description: 'Stručan i iskusan tim posvećen kvalitetu i brzini usluge' },
        { value: '6', title: 'Godina iskustva', description: 'Od 2018. godine kontinuirano rastemo i razvijamo poslovanje' },
        { value: '0', title: 'Dana blokade', description: 'Nikada nismo imali blokadu računa - garancija urednog poslovanja' }
    ];

    return (
        <section className="bg-[#483778] bg-opacity-80 py-16 md:py-24">
            <div className="max-w-[980px] mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Priznanja i stabilnost poslovanja</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
