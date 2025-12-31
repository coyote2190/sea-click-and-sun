'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import {
  CompanyIdentity,
  Footer,
  Header,
  Hero,
  Marquee,
  OurMethod,
  OurServices,
  ProjectSlider,
  References
} from '@/components';

import './home.scss';

function HomeContent() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  // Coming Soon Page
  if (!isPreview) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <Image alt="logo sea click and sun" height={150} src="/SCAS-LOGOS-01.png" width={300} />
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold font-['Bricolage_Grotesque'] leading-tight">
              Bientôt en ligne
            </h1>
          </div>
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
            Notre nouveau site web arrive très prochainement. Restez connectés pour découvrir nos créations et services.
          </p>
        </div>
      </main>
    );
  }

  // Full Home Page (with ?preview=true)
  return (
    <main>
      <Header />
      <Hero />
      {/* <ScrollImage alt="Creative workspace" imageUrl="/vlad-hilitanu-1FI2QAYPa-Y-unsplash.jpg" /> */}
      <Marquee
        backgroundColor="#e87461"
        speed={50}
        text="LOGO * CHARTE GRAPHIQUE * SITE WEB * E-COMMERCE * PRINT * BRANDING * SEO * MARKETING DIGITAL"
        textColor="#fff"
      />
      <CompanyIdentity />
      <OurServices />
      <OurMethod />

      <ProjectSlider />
      <References />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <HomeContent />
    </Suspense>
  );
}
