'use client';

import { FC, useState } from 'react';

import { FooterProps } from './footer.types';

const Footer: FC<FooterProps> = ({ dataTestId }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12" data-testid={dataTestId}>
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 font-['Bricolage_Grotesque']">
            Un projet en tête ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons collaborer pour donner vie à
            vos idées.
          </p>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mb-16"></div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Lille et alentours</h3>
              <p className="text-gray-400">
                Principalement basés sur Lille
                <br />
                et sa métropole
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Plus loin ?</h3>
              <p className="text-gray-400">
                Aucun souci, nous intervenons
                <br />
                partout en France et au-delà !
              </p>
            </div>
          </div>

          {/* Right: Email Form */}
          <div className="flex items-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex items-center border-b border-gray-600 pb-2 hover:border-white transition-colors">
                <input
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                  placeholder="Entrez votre email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="ml-4 text-white hover:scale-110 transition-transform" type="submit">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 | Tous droits réservés par Sea Click & Sun</p>
          <nav className="flex gap-8">
            <a className="text-sm text-white hover:text-gray-400 transition-colors" href="/about">
              À PROPOS
            </a>
            <a className="text-sm text-white hover:text-gray-400 transition-colors" href="/privacy">
              CONFIDENTIALITÉ
            </a>
            <a className="text-sm text-white hover:text-gray-400 transition-colors" href="/career">
              MENTIONS LÉGALES
            </a>
            <a className="text-sm text-white hover:text-gray-400 transition-colors" href="/sitemap">
              PLAN DU SITE
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
