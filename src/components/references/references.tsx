'use client';

import { FC } from 'react';
import Image from 'next/image';

import { Reference, ReferencesProps } from './references.types';

const references: Reference[] = [
  { id: '1', logo: '/logos/logo_bold.png', name: 'BOLD' },
  { id: '2', logo: '/logos/logo_aqua-2000.png', name: 'Aqua 2000' },
  { id: '3', logo: '/logos/logo_talent-france.png', name: 'Talent France' },
  { id: '4', logo: '/logos/logo_ssid.png', name: 'SSID' },
  { id: '5', logo: '/logos/logo_erica-laine-savini.png', name: 'Erica Laine Savini' },
  { id: '6', logo: '/logos/logo_julien-dirson.png', name: 'Julien Dirson' }
];

const References: FC<ReferencesProps> = ({ dataTestId }) => {
  return (
    <section className="bg-white py-20 px-6 md:px-12" data-testid={dataTestId}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-16 font-['Bricolage_Grotesque']">
          Nos références.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 border border-gray-200">
          {references.map((reference) => (
            <div
              className="aspect-square border-r border-b border-gray-200 flex items-center justify-center p-8 hover:bg-gray-50 transition-colors"
              key={reference.id}
            >
              <div className="relative w-full h-full">
                <Image
                  fill
                  alt={reference.name}
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                  src={reference.logo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
