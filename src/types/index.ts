// Type definitions for the portfolio website

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  logo: string;
  verificationUrl?: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string | null;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}