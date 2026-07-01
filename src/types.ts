export interface DesignStyle {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface PendantType {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ChainLength {
  id: string;
  name: string;
  price: number;
}

export interface PackagingOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface MaterialOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Configuration {
  material: string;
  style: string;
  pendant: string;
  length: string;
  engraving: string;
  packaging: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  text: string;
  role?: string;
  rating: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Bonus {
  id: number;
  title: string;
  value: number;
  description: string;
  isFree: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
