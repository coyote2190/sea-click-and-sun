export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  imageUrl: string;
}

export interface OurServicesProps {
  dataTestId?: string;
}
