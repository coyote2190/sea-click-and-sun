'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

import { Project, ProjectSliderProps } from './projectSlider.types';

const projects: Project[] = [
  {
    category: 'Branding',
    id: '1',
    imageUrl: '/thought-catalog-505eectW54k-unsplash.jpg',
    subtitle: 'Identité visuelle complète',
    title: 'THE BILLFOLD'
  },
  {
    category: 'Web Design',
    id: '2',
    imageUrl: '/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg',
    subtitle: 'Site e-commerce',
    title: 'MODERN SHOP'
  },
  {
    category: 'Print',
    id: '3',
    imageUrl: '/thought-catalog-505eectW54k-unsplash.jpg',
    subtitle: 'Campagne publicitaire',
    title: 'CREATIVE CAMPAIGN'
  },
  {
    category: 'Branding',
    id: '4',
    imageUrl: '/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg',
    subtitle: 'Logo & charte graphique',
    title: 'BRAND IDENTITY'
  },
  {
    category: 'Web Design',
    id: '5',
    imageUrl: '/thought-catalog-505eectW54k-unsplash.jpg',
    subtitle: 'Refonte de site web',
    title: 'WEB REDESIGN'
  },
  {
    category: 'Print',
    id: '6',
    imageUrl: '/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg',
    subtitle: "Brochure d'entreprise",
    title: 'CORPORATE BROCHURE'
  }
];

const ProjectSlider: FC<ProjectSliderProps> = ({ dataTestId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const startIndex = Math.floor(currentIndex / itemsPerPage) * itemsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 overflow-hidden" data-testid={dataTestId}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 font-['Bricolage_Grotesque']">
            Nos projets
          </h2>
          <p className="text-xl text-gray-400">Découvrez une sélection de nos réalisations</p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {visibleProjects.map((project) => {
              const actualIndex = projects.findIndex((p) => p.id === project.id);
              return (
                <div
                  className={`relative aspect-[3/4] cursor-pointer overflow-hidden transition-all duration-500 ${
                    actualIndex === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-50 hover:opacity-75 scale-95 hover:scale-100'
                  }`}
                  key={project.id}
                  onClick={() => goToSlide(actualIndex)}
                >
                  <Image
                    fill
                    alt={project.title}
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    src={project.imageUrl}
                  />
                </div>
              );
            })}
          </div>

          {/* Project Info */}
          <div className="text-center mb-12">
            <h3 className="text-5xl md:text-7xl font-bold mb-4 font-['Bricolage_Grotesque']">
              {projects[currentIndex].title}
            </h3>
            <p className="text-xl text-gray-400 mb-2">{projects[currentIndex].subtitle}</p>
            <span className="inline-block px-4 py-2 border border-white text-sm">
              {projects[currentIndex].category}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8">
            <button
              className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              onClick={prevSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  className={`transition-all ${
                    index === currentIndex ? 'w-12 h-2 bg-white' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                  }`}
                  key={index}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            <button
              className="w-12 h-12 border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              onClick={nextSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
