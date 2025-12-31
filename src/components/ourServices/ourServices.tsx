'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

import { OurServicesProps, Service } from './ourServices.types';

const services: Service[] = [
  {
    badges: ['LOGO', 'CHARTE GRAPHIQUE', 'IDENTITÉ VISUELLE'],
    description:
      "Nous créons des identités de marque fortes et mémorables qui reflètent l'essence de votre entreprise. Du logo à la charte graphique complète, nous donnons vie à votre vision et créons une image cohérente sur tous vos supports de communication.",
    id: 'branding',
    imageUrl: '/thought-catalog-505eectW54k-unsplash.jpg',
    subtitle: 'Identité de marque',
    title: 'Créez une identité unique et mémorable'
  },
  {
    badges: ['FLYERS', 'BROCHURES', 'AFFICHES', 'CARTES DE VISITE'],
    description:
      "Des supports print qui captivent et marquent les esprits. Nous concevons des designs impactants pour tous vos besoins d'impression : flyers, brochures, affiches, catalogues, cartes de visite et bien plus encore. Qualité professionnelle garantie.",
    id: 'print',
    imageUrl: '/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg',
    subtitle: 'Support Print',
    title: 'Du print qui marque les esprits'
  },
  {
    badges: ['WordPress', 'Next.js', 'Applications sur mesure'],
    description:
      "Nous créons des sites web performants et élégants qui captent l'attention de votre audience. Du design à la mise en ligne, nous accompagnons votre projet de A à Z avec une expertise technique et créative.",
    id: 'web-design',
    imageUrl: '/thought-catalog-505eectW54k-unsplash.jpg',
    subtitle: 'Web Design',
    title: 'Des sites web qui convertissent'
  },
  {
    badges: ['SEO CERTIFIED', 'GOOGLE PARTNER'],
    description:
      'Améliorez votre visibilité en ligne grâce à nos stratégies SEO éprouvées. Nous optimisons votre présence digitale pour atteindre vos objectifs marketing et générer plus de leads qualifiés.',
    id: 'marketing',
    imageUrl: '/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg',
    subtitle: 'Marketing Digital',
    title: 'Boostez votre présence en ligne'
  }
];

const OurServices: FC<OurServicesProps> = ({ dataTestId }) => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <>
      {/* <div className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight">Nos services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
        </div>
      </div> */}

      <section className="relative bg-black text-white py-20 px-6 md:px-12" data-testid={dataTestId}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image fill priority alt="Background" className="object-cover" src={activeService.imageUrl} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="h-[200px] flex items-center justify-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-center font-['Bricolage_Grotesque']">
              {activeService.title}
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 min-h-[300px]">
            {/* Left: Subtitle */}
            <div>
              <h3 className="text-xl font-semibold mb-2 pb-2 border-b border-white inline-block">
                {activeService.subtitle}
              </h3>
            </div>

            {/* Right: Description */}
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{activeService.description}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                {activeService.badges.map((badge, index) => (
                  <div className="text-sm text-gray-400 pb-2 border-b border-gray-700" key={index}>
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white">
            {services.map((service) => (
              <button
                className={`py-6 px-8 text-left transition-all duration-300 border-r border-white last:border-r-0 ${
                  activeService.id === service.id ? 'bg-white text-black' : 'bg-transparent hover:bg-white/10'
                }`}
                key={service.id}
                onClick={() => setActiveService(service)}
              >
                <span className="block text-sm text-gray-400 mb-1">0{services.indexOf(service) + 1}</span>
                <span className="block text-xl font-semibold">{service.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
