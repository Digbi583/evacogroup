export type ClusterType = 'property' | 'services' | 'worldwide' | 'leisure';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  cluster: ClusterType;
  location: string;
  country: string;
  status: 'Available' | 'Few Units Left' | 'Under Development' | 'Completed' | 'Sold Out';
  startingPriceUSD: number;
  startingPriceMUR: number;
  startingPriceEUR: number;
  bedrooms: string;
  surfaceArea: string;
  thumbnail: string;
  gallery: string[];
  videoId?: string;
  overview: string;
  keyFeatures: string[];
  investmentPerks: string[];
  residencyEligible: boolean;
  architecturalStyle: string;
  ecoFeatures?: string[];
}

export interface ClusterInfo {
  id: ClusterType;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  iconName: string;
  entities: {
    name: string;
    role: string;
    description: string;
    image: string;
    badges?: string[];
  }[];
}

export interface CelebrityTestimonial {
  name: string;
  role: string;
  image: string;
  experience: string;
  locationVisited: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Corporate' | 'Property' | 'Media' | 'Leisure' | 'Services';
  youtubeId: string;
  duration: string;
  description: string;
  featured?: boolean;
}

export interface CurrencyRate {
  code: 'USD' | 'EUR' | 'MUR' | 'GBP' | 'ZAR';
  symbol: string;
  rateToUSD: number; // 1 USD = rate * Currency
}

export interface AIMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
  propertyRecommendations?: string[];
}

export interface VillaMatchCriteria {
  objective: 'lifestyle_vacation' | 'capital_growth' | 'permanent_residency' | 'retirement';
  budgetUSD: number;
  bedrooms: string;
  lifestylePreference: 'marina_waterfront' | 'high_tech_private' | 'tropical_spa' | 'european_island';
  timeline: 'immediate' | 'within_6_months' | 'next_year' | 'exploring';
  originCountry: string;
}
