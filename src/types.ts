export type DogSize = 'small' | 'medium' | 'large';
export type Style = 'casual' | 'chic' | 'streetwear' | 'elegant';
export type Weather = 'rain' | 'winter' | 'mid-season';
export type AccessoryCategory = 'leash' | 'hat' | 'bed' | 'toy' | 'other';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  buyUrl: string;
}

export interface Accessory extends Product {
  category: AccessoryCategory;
  description: string;
}

export interface Look {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  size: DogSize;
  style: Style;
  weather: Weather;
  products: Product[];
  pinterestUrl?: string;
}
