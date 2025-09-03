export interface BathType {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  materials: string[];
  included: string[];
  image: string;
  price: string;
  buildTime: string;
}

export interface Advantage {
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  area: string;
  duration: string;
  price: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  duration?: string;
}

export interface Company {
  name: string;
  domain: string;
  email: string;
  workTime: string;
  description: string;
  region: string;
  guarantee: string;
  buildTime: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
}

export interface SiteData {
  company: Company;
  hero: Hero;
  advantages: Advantage[];
  bathTypes: BathType[];
  projects: Project[];
  process: ProcessStep[];
}
