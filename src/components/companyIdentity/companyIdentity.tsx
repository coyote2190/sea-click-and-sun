'use client';

import { FC } from 'react';

import { CompanyIdentityProps } from './companyIdentity.types';

const CompanyIdentity: FC<CompanyIdentityProps> = ({ dataTestId }) => {
  return (
    <section className="bg-white py-20 lg:py-32 px-6 lg:px-8" data-testid={dataTestId}>
      <div className="mx-auto flex max-w-7xl p-3 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 lg:gap-16">
          {/* Left column - Small text with arrow */}
          <div className="flex items-start gap-3 border-t-1 border-black pt-4 flex-col mt-5">
            <div className="flex  items-start gap-3">
              <p className="text-base leading-relaxed">Notre identité.</p>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </div>
          </div>

          {/* Right column - Main content */}
          <div className="space-y-12">
            {/* Large title */}
            <h2 className="text-4xl lg:text-7xl font-bold leading-tight">
              Deux univers complémentaires,
              <br />
              une seule vision.
            </h2>

            {/* Description aligned to the right */}
            <div className="flex justify-end">
              <p className="text-base lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                La graphiste façonne des identités visuelles mémorables, avec une sensibilité artistique. Le développeur
                web transforme les idées en sites fluides, rapides et durables, optimisés pour tous les écrans.
                <br /> <br />
                Ensemble, nous donnons vie à vos projets, alliant esthétique et performance pour un impact maximal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIdentity;
