import { FC } from 'react';
import Image from 'next/image';

import { HeroProps } from './hero.types';

import './hero.scss';

const Hero: FC<HeroProps> = ({ dataTestId }) => {
  console.log('test');

  return (
    <section className="hero-container min-h-screen" data-testid={dataTestId}>
      <div className="mx-auto flex max-w-7xl p-3 lg:px-8 flex-col gap-8 lg:gap-12">
        {/* <div className="mx-auto flex max-w-7xl justify-between p-3 flex-col gap-8 lg:gap-12 h-full"> */}
        <div className="hero-title">
          <h1 className="text-5xl lg:text-8xl leading-tight font-bricolage uppercase">
            Nous <br />
            sommes un <br />
            duo créatif
          </h1>

          <Image alt="form" height={80} src="/form03.webp" width={80} />
        </div>

        <div className="hero-subtitle flex items-center gap-6 ml-auto">
          <div>
            <h2 className="text-xl lg:text-2xl font-semibold uppercase">
              Graphiste <br />& Développeur web
            </h2>
            <p className="text-xl lg:text-lg max-w-sm text-neutral-600 mt-3">
              Qui imagine, conçoit et réalise des supports print & digitaux uniques, esthétiques et performants.
            </p>
          </div>
          <div className="max-w-xl bg-neutral-600 w-200 h-0.5">&nbsp;</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
