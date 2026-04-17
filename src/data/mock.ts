import { Look, Product } from '../types';

export const PRODUCTS: Product[] = [
  // Mode & Matching
  {
    id: 'p1',
    name: 'Manteau Laine Camel',
    brand: 'Maxbone',
    price: 95,
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  {
    id: 'p2',
    name: 'Hoodie Matching Humain',
    brand: 'Spark Paws',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  {
    id: 'p3',
    name: 'Veste Matelassée Marine',
    brand: 'Milk & Pepper',
    price: 78,
    imageUrl: 'https://images.unsplash.com/photo-1541364983171-a8ba01d95cfc?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  // Premium & Design
  {
    id: 'p4',
    name: 'Trench Coat Minimaliste',
    brand: 'Cloud7',
    price: 145,
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  {
    id: 'p5',
    name: 'Harnais Technique Urbain',
    brand: 'MANDARINE BROTHERS',
    price: 55,
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  {
    id: 'p6',
    name: 'Veste Expedition',
    brand: 'Hurtta',
    price: 110,
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  // Classiques
  {
    id: 'p7',
    name: 'Imperméable Classique',
    brand: 'Hunter',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  {
    id: 'p8',
    name: 'Manteau de Pluie',
    brand: 'Trixie',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385d6?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  {
    id: 'p9',
    name: 'Veste Cirée Iconique',
    brand: 'Barbour',
    price: 180,
    imageUrl: 'https://images.unsplash.com/photo-1583511666407-5f06533f2113?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  },
  // Luxe
  {
    id: 'p10',
    name: 'Pull Cachemire Signature',
    brand: 'Ralph Lauren Pets',
    price: 220,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400',
    buyUrl: '#'
  }
];

export const LOOKS: Look[] = [
  {
    id: 'l1',
    title: 'Paris Chic Beige',
    description: 'L\'élégance parisienne intemporelle en tons neutres.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    style: 'chic',
    weather: 'mid-season',
    products: [PRODUCTS[0], PRODUCTS[3], PRODUCTS[2]]
  },
  {
    id: 'l2',
    title: 'Streetwear Urbain',
    description: 'Un look dynamique et moderne pour la ville.',
    imageUrl: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'streetwear',
    weather: 'mid-season',
    products: [PRODUCTS[1], PRODUCTS[4], PRODUCTS[5]]
  },
  {
    id: 'l3',
    title: 'Classique Élégant',
    description: 'Le charme des traditions avec une touche de luxe.',
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    style: 'elegant',
    weather: 'winter',
    products: [PRODUCTS[9], PRODUCTS[8], PRODUCTS[6]]
  },
  {
    id: 'l4',
    title: 'Minimalisme Allemand',
    description: 'Des lignes pures et une esthétique sobre.',
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    style: 'chic',
    weather: 'mid-season',
    products: [PRODUCTS[3], PRODUCTS[0], PRODUCTS[4]]
  },
  {
    id: 'l5',
    title: 'Aventure Outdoor',
    description: 'Prêt pour l\'exploration sauvage avec style.',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    style: 'casual',
    weather: 'winter',
    products: [PRODUCTS[5], PRODUCTS[6], PRODUCTS[7]]
  },
  {
    id: 'l6',
    title: 'Matchy-Matchy',
    description: 'Le duo parfait, totalement coordonné.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'streetwear',
    weather: 'mid-season',
    products: [PRODUCTS[1], PRODUCTS[2], PRODUCTS[0]]
  }
];

