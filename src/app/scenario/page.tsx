/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

import { Footer, Header } from '@/components';

type ServiceType = 'design' | 'dev' | 'complete' | null;

interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  // Step 2
  serviceType: ServiceType;
  // Step 3
  budget: string;
  deadline: string;
  description: string;
  designNeeds: string[];
  devNeeds: string[];
}

export default function ScenarioPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    budget: '',
    company: '',
    deadline: '',
    description: '',
    designNeeds: [],
    devNeeds: [],
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    serviceType: null
  });

  const handleNext = () => {
    if (currentStep === 0) {
      // Start the form
      setCurrentStep(1);
    } else if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleArrayField = (field: 'designNeeds' | 'devNeeds', value: string) => {
    const currentArray = formData[field];
    if (currentArray.includes(value)) {
      updateFormData(
        field,
        currentArray.filter((item) => item !== value)
      );
    } else {
      updateFormData(field, [...currentArray, value]);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setCurrentStep(4);
  };

  const scrollToForm = () => {
    setCurrentStep(1);
    setTimeout(() => {
      window.scrollTo({ behavior: 'smooth', top: window.innerHeight });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Header Section */}
      <section className="min-h-screen bg-white flex items-center px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-8xl font-bold mb-8 font-['Bricolage_Grotesque'] leading-tight">
              Imaginons votre projet.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Ensemble, nous transformons vos idées en réalité. Du concept à la réalisation, nous vous accompagnons à
              chaque étape de votre projet.
            </p>
          </div>

          <button
            className="bg-black text-white px-12 py-5 text-lg font-medium hover:bg-gray-800 transition-colors w-full lg:w-auto"
            onClick={scrollToForm}
          >
            Commencer le formulaire
          </button>
        </div>
      </section>

      {/* Form Section */}
      <div className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress bar */}
          {currentStep < 4 && (
            <div className="mb-16 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                {[1, 2, 3].map((step) => (
                  <div className="flex items-center flex-1" key={step}>
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                        currentStep >= step ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-0.5 mx-4 ${currentStep > step ? 'bg-black' : 'bg-gray-200'}`} />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600">Étape {currentStep} sur 3</p>
            </div>
          )}

          {/* Step 1: Contact info */}
          {currentStep === 1 && (
            <div className="border border-gray-200 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-['Bricolage_Grotesque']">Vos coordonnées</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                      Prénom *
                    </label>
                    <input
                      required
                      autoComplete="given-name"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                      Nom *
                    </label>
                    <input
                      required
                      autoComplete="family-name"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Téléphone *
                  </label>
                  <input
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="company">
                    Entreprise
                  </label>
                  <input
                    autoComplete="organization"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  className="bg-black text-white px-12 py-4 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  onClick={handleNext}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Service type */}
          {currentStep === 2 && (
            <div className="border border-gray-200 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-['Bricolage_Grotesque']">Type de service</h2>
              <p className="text-gray-600 mb-8">Quel type de service vous intéresse ?</p>
              <div className="space-y-4">
                {[
                  {
                    description: 'Logo, charte graphique, supports print',
                    icon: '🎨',
                    id: 'design',
                    title: 'Design & Print'
                  },
                  {
                    description: 'Site web, SEO, application',
                    icon: '💻',
                    id: 'dev',
                    title: 'Développement'
                  },
                  {
                    description: 'Design + Développement',
                    icon: '✨',
                    id: 'complete',
                    title: 'Solution complète'
                  }
                ].map((service) => (
                  <label
                    className={`block p-6 border-2 cursor-pointer transition-all ${
                      formData.serviceType === service.id
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    key={service.id}
                  >
                    <input
                      checked={formData.serviceType === service.id}
                      className="sr-only"
                      name="serviceType"
                      type="radio"
                      value={service.id}
                      onChange={(e) => updateFormData('serviceType', e.target.value)}
                    />
                    <div className="flex items-start">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <button
                  className="border border-black px-12 py-4 hover:bg-black hover:text-white transition-colors"
                  onClick={handleBack}
                >
                  Retour
                </button>
                <button
                  className="bg-black text-white px-12 py-4 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.serviceType}
                  onClick={handleNext}
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Project details */}
          {currentStep === 3 && (
            <div className="border border-gray-200 p-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-['Bricolage_Grotesque']">Détails du projet</h2>
              <p className="text-gray-600 mb-8">Parlez-nous de votre projet</p>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="description">
                    Description du projet *
                  </label>
                  <textarea
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors h-32 resize-none"
                    id="description"
                    value={formData.description}
                    onChange={(e) => updateFormData('description', e.target.value)}
                  />
                </div>

                {(formData.serviceType === 'design' || formData.serviceType === 'complete') && (
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Besoins en design (plusieurs choix possibles)
                    </label>
                    <div className="space-y-2">
                      {['Logo', 'Charte graphique', 'Supports print', 'Packaging', 'Autre'].map((need) => (
                        <label
                          className="flex items-center p-4 border border-gray-300 cursor-pointer hover:border-black transition-colors group"
                          key={need}
                        >
                          <div className="relative flex items-center justify-center">
                            <input
                              checked={formData.designNeeds.includes(need)}
                              className="sr-only peer"
                              type="checkbox"
                              onChange={() => toggleArrayField('designNeeds', need)}
                            />
                            <div className="w-5 h-5 border-2 border-gray-400 group-hover:border-black transition-colors peer-checked:bg-black peer-checked:border-black flex items-center justify-center">
                              {formData.designNeeds.includes(need) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M5 13l4 4L19 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="ml-3 text-sm">{need}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {(formData.serviceType === 'dev' || formData.serviceType === 'complete') && (
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Besoins en développement (plusieurs choix possibles)
                    </label>
                    <div className="space-y-2">
                      {['Site vitrine', 'E-commerce', 'Application web', 'SEO', 'Maintenance', 'Autre'].map((need) => (
                        <label
                          className="flex items-center p-4 border border-gray-300 cursor-pointer hover:border-black transition-colors group"
                          key={need}
                        >
                          <div className="relative flex items-center justify-center">
                            <input
                              checked={formData.devNeeds.includes(need)}
                              className="sr-only peer"
                              type="checkbox"
                              onChange={() => toggleArrayField('devNeeds', need)}
                            />
                            <div className="w-5 h-5 border-2 border-gray-400 group-hover:border-black transition-colors peer-checked:bg-black peer-checked:border-black flex items-center justify-center">
                              {formData.devNeeds.includes(need) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M5 13l4 4L19 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="ml-3 text-sm">{need}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="budget">
                      Budget estimé
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => updateFormData('budget', e.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      <option value="< 2000€">{'< 2000€'}</option>
                      <option value="2000€ - 5000€">2000€ - 5000€</option>
                      <option value="5000€ - 10000€">5000€ - 10000€</option>
                      <option value="> 10000€">{'> 10000€'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="deadline">
                      Délai souhaité
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      id="deadline"
                      value={formData.deadline}
                      onChange={(e) => updateFormData('deadline', e.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      <option value="Urgent (< 1 mois)">Urgent ({'< 1 mois'})</option>
                      <option value="1-3 mois">1-3 mois</option>
                      <option value="3-6 mois">3-6 mois</option>
                      <option value="Pas de délai précis">Pas de délai précis</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  className="border border-black px-12 py-4 hover:bg-black hover:text-white transition-colors"
                  onClick={handleBack}
                >
                  Retour
                </button>
                <button
                  className="bg-black text-white px-12 py-4 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.description}
                  onClick={handleSubmit}
                >
                  Envoyer
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Thank you */}
          {currentStep === 4 && (
            <div className="border border-gray-200 p-12 text-center">
              <div className="text-6xl mb-8">🎉</div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-['Bricolage_Grotesque']">Merci !</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Votre demande a bien été envoyée. Nous reviendrons vers vous dans les plus brefs délais.
              </p>
              {/* <a className="inline-block bg-black text-white px-12 py-4 hover:bg-gray-800 transition-colors" href="/">
                Retour à l'accueil
              </a> */}
            </div>
          )}
        </div>
      </div>

      {/* Projects Gallery Section - Removed */}

      <Footer />
    </div>
  );
}
