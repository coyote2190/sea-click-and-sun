'use client';

import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fonts.size.base};
  border: 2px solid ${({ theme }) => theme.colors.neutral.gray[300]};
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fonts.size.base};
  border: 2px solid ${({ theme }) => theme.colors.neutral.gray[300]};
  border-radius: 8px;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.semibold};
  color: ${({ theme }) => theme.colors.primary.contrastText};
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <ContactContainer>
      <Title>Contactez-nous</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nom</Label>
          <Input required id="name" name="name" type="text" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input required id="email" name="email" type="email" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea required id="message" name="message" />
        </FormGroup>

        <Button type="submit">Envoyer</Button>
      </Form>
    </ContactContainer>
  );
}
