
import React from 'react';

const ServiceCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => {
  return (
    <div className="bg-[#231b3b] p-6 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-[#483778] flex items-center justify-center mb-8">
        <p className="text-4xl font-bold">{number}</p>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-base text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      number: '1',
      title: 'Uvoz voća i povrća',
      description: 'Direktan uvoz svežih proizvoda iz regiona i šire, uz kompletnu logističku podršku i brzu carinu.',
    },
    {
      number: '2',
      title: 'Distribucija',
      description: 'Organizovana distribucija do vaše lokacije sa sopstvenim voznim parkom i planiranim rutama isporuke.',
    },
    {
      number: '3',
      title: 'Kontrola kvaliteta',
      description: 'Stroga selekcija i provera svežine svakog proizvoda pre isporuke krajnjim kupcima.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/8a4b41e597d541aeb6c15974c3ee5bbf.jpg')" }}>
       <div className="absolute inset-0 bg-[#231b3b] opacity-80"></div>
       <div className="relative z-10 max-w-[980px] mx-auto px-6">
            <h2 className="text-5xl font-bold text-center mb-12">Naše usluge i poslovanje</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
       </div>
    </section>
  );
};

export default ServicesSection;
