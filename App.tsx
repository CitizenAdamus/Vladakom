import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ReputationSection from './components/ReputationSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import StatsSection from './components/StatsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="bg-[#231b3b] text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ReputationSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <StatsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;