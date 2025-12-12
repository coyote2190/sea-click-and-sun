'use client';

import { FC } from 'react';

import Container from '../../container';

import {
  StyledServiceCard,
  StyledServiceDescription,
  StyledServiceNumber,
  StyledServicesContainer,
  StyledServicesHeader,
  StyledServicesIntro,
  StyledServiceTitle
} from './services.styles';
import { ServicesProps } from './services.types';

const Services: FC<ServicesProps> = ({ dataTestId }) => {
  const services = [
    {
      bgColor: '#1a1a1a',
      description:
        "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
      number: '/01',
      title: 'Digital products'
    },
    {
      bgColor: '#9b8dd6',
      description:
        "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
      number: '/02',
      title: 'Corporate websites'
    },
    {
      bgColor: '#ff6b6b',
      description:
        "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
      number: '/03',
      title: 'Mobile development'
    },
    {
      bgColor: '#4ecdc4',
      description:
        "We create visually compelling designs that enhance user experience. We make sure your brand's visuals resonate with your audience.",
      number: '/04',
      title: 'Brand identity'
    }
  ];

  return (
    <StyledServicesContainer data-testid={dataTestId}>
      <Container>
        <StyledServicesHeader>Our Services</StyledServicesHeader>
        <StyledServicesIntro>
          Discover our comprehensive range of digital solutions tailored to elevate your business.
        </StyledServicesIntro>
        {services.map((service, index) => (
          <StyledServiceCard $bgColor={service.bgColor} key={index}>
            <StyledServiceNumber>{service.number}</StyledServiceNumber>
            <StyledServiceTitle>{service.title}</StyledServiceTitle>
            <StyledServiceDescription>{service.description}</StyledServiceDescription>
          </StyledServiceCard>
        ))}
      </Container>
    </StyledServicesContainer>
  );
};

export default Services;
