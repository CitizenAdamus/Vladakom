
import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './icons/SocialIcons';

const ContactSection: React.FC = () => {
    return (
        <section className="bg-[#231b3b] py-16 md:py-24">
            <div className="max-w-[980px] mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-12">Kontaktirajte nas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Adresa:</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Zlatiborska BB, Bobište<br />
                            16000 Leskovac, Srbija
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Telefon:</h3>
                        <p className="text-gray-300 leading-relaxed">
                            <a href="tel:062606831" className="underline hover:text-pink-400">062 606 831</a>
                        </p>
                         <p className="text-gray-300 leading-relaxed">
                            <a href="mailto:vladakom@yahoo.com" className="underline hover:text-pink-400">vladakom@yahoo.com</a>
                        </p>
                         <div className="flex space-x-4 mt-4">
                            <a href="https://www.facebook.com/wix" target="_blank" rel="noreferrer noopener" className="text-white hover:text-pink-400"><FacebookIcon /></a>
                            <a href="https://www.twitter.com/wix" target="_blank" rel="noreferrer noopener" className="text-white hover:text-pink-400"><TwitterIcon /></a>
                            <a href="https://www.linkedin.com/company/wix-com" target="_blank" rel="noreferrer noopener" className="text-white hover:text-pink-400"><LinkedInIcon /></a>
                            <a href="https://www.instagram.com/wix" target="_blank" rel="noreferrer noopener" className="text-white hover:text-pink-400"><InstagramIcon /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Radno vreme</h3>
                        <div className="text-gray-300 leading-relaxed space-y-2">
                           <div className="flex justify-between"><span>Ponedeljak - Petak</span> <span>8:00 am – 8:00 pm</span></div>
                           <div className="flex justify-between"><span>Subota</span> <span>9:00 am – 7:00 pm</span></div>
                        </div>
                    </div>
                </div>
                 <div className="h-[350px] bg-gray-700 flex items-center justify-center">
                    <p className="text-gray-400">Google Map Placeholder</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
