import React from 'react';

const TeamMemberCard: React.FC<{ name: string; title: string; imgSrc: string }> = ({ name, title, imgSrc }) => (
    <div className="relative group overflow-hidden">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[85%] bg-[#231b3b] p-4 text-center">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-base text-gray-300">{title}</p>
        </div>
    </div>
);

const TeamSection: React.FC = () => {
    const teamMembers = [
        { name: 'Ana', title: 'Manager Prodaje', imgSrc: 'https://static.wixstatic.com/media/a3c153_6e0a766c048c40aaa5230e53f2d6ac59~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01/IMG_2698_edited.jpg' },
        { name: 'Darko Kondic', title: 'Magacioner', imgSrc: 'https://static.wixstatic.com/media/a3c153_cb8da2c95b7f4299b4ea2a150b7315a1~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01/IMG_3981_edited.jpg' },
        { name: 'Sanja Trta', title: 'Product Manager', imgSrc: 'https://static.wixstatic.com/media/a3c153_7c41573248584055af6095d43568dbb4~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01/IMG_4184_edited.jpg' },
        { name: 'Sasa Ilic', title: 'Direktor', imgSrc: 'https://static.wixstatic.com/media/a3c153_86b7b7a7dbc64942a968e08b13dce3aa~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01/IMG_4499%20(1)_edited.jpg' }
    ];

    return (
        <section className="bg-[#231b3b] py-16 md:py-24">
            <div className="max-w-[980px] mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-6">Naš Tim</h2>
                <p className="text-base text-gray-300 max-w-2xl mx-auto mb-12">
                    Naš tim čine iskusni stručnjaci iz oblasti otkupa, logistike i veleprodaje voća i povrća. Svaki član tima posvećen je kvalitetu, pouzdanosti i brzini isporuke. Zajedno pratimo tržište, biramo samo najkvalitetnije proizvode i obezbeđujemo da svežina stigne do vas bez kompromisa. Naša snaga je u znanju, saradnji i poverenju koje gradimo sa partnerima svakog dana.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;