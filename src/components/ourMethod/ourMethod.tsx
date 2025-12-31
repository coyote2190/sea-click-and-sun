'use client';

import { FC, useState } from 'react';

import { MethodStep, OurMethodProps } from './ourMethod.types';

const methodSteps: MethodStep[] = [
  {
    answer:
      "Nous commençons par comprendre votre entreprise, vos objectifs et votre audience cible. Cette phase d'analyse approfondie nous permet de définir une stratégie sur mesure adaptée à vos besoins spécifiques.",
    id: '1',
    question: 'Comment définissons-nous votre stratégie digitale ?'
  },
  {
    answer:
      'Notre équipe créative développe des concepts visuels innovants qui reflètent votre identité de marque. Nous créons des maquettes détaillées et des prototypes interactifs pour valider chaque élément avant la production.',
    id: '2',
    question: 'Quel est notre processus de création ?'
  },
  {
    answer:
      "Nous utilisons les technologies les plus récentes et les meilleures pratiques du web. Chaque projet est développé avec une attention particulière à la performance, la sécurité et l'expérience utilisateur.",
    id: '3',
    question: 'Comment développons-nous vos projets ?'
  },
  {
    answer:
      'Avant chaque lancement, nous effectuons des tests rigoureux sur tous les appareils et navigateurs. Nous optimisons chaque détail pour garantir une expérience parfaite à vos utilisateurs.',
    id: '4',
    question: 'Quels tests effectuons-nous ?'
  },
  {
    answer:
      "Notre accompagnement ne s'arrête pas au lancement. Nous assurons le suivi, la maintenance et l'évolution de votre projet pour garantir sa pérennité et sa performance dans le temps.",
    id: '5',
    question: 'Comment assurons-nous le suivi ?'
  }
];

const OurMethod: FC<OurMethodProps> = ({ dataTestId }) => {
  const [expandedId, setExpandedId] = useState<string | null>('1');

  const toggleStep = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12" data-testid={dataTestId}>
      <div className="max-w-7xl mx-auto">
        {/* Title and Description */}
        <div className="mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">Notre méthode de travail</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Une approche structurée et collaborative pour garantir le succès de chaque projet. Découvrez comment nous
            transformons vos idées en réalité digitale.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {methodSteps.map((step) => (
            <div
              className="border-b border-gray-200 pb-4 transition-all duration-300 hover:border-gray-400"
              key={step.id}
            >
              <button
                className="w-full flex justify-between items-start gap-4 text-left group"
                onClick={() => toggleStep(step.id)}
              >
                <span className="text-lg font-semibold group-hover:text-gray-600 transition-colors duration-300">
                  {step.question}
                </span>
                <span
                  className={`text-2xl font-light flex-shrink-0 transition-all duration-200 ${
                    expandedId === step.id ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  {expandedId === step.id ? '−' : '+'}
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-out ${
                  expandedId === step.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="text-gray-600 leading-relaxed pr-8">{step.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMethod;
