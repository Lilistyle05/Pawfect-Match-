import { Look, Product, Accessory } from '../types';

export const PRODUCTS: Product[] = [
  // Mode & Matching
  {
    id: 'p1',
    name: 'Manteau Laine Camel',
    brand: 'Maxbone',
    price: 95,
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&q=80&w=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1591160674255-fc34bb0b9977?auto=format&fit=crop&q=80&w=400',
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

export const ACCESSORIES: Accessory[] = [
  {
    id: 'a1',
    name: 'Laisse en Cuir Tressé',
    brand: 'Wild One',
    price: 48,
    category: 'leash',
    description: 'Une laisse élégante et résistante pour vos sorties citadines.',
    imageUrl: 'https://images.unsplash.com/photo-1574850715183-730d97e1d99c?q=80&w=1287&auto=format&fit=crop',
    buyUrl: '#'
  },
  {
    id: 'a2',
    name: 'Panier Nuage Confort',
    brand: 'Cloud9',
    price: 120,
    category: 'bed',
    description: 'Le summum du confort pour des siestes royales.',
    imageUrl: 'https://images.unsplash.com/photo-1541364983171-a8ba01d95cfc?q=80&w=800&auto=format&fit=crop',
    buyUrl: '#'
  },
  {
    id: 'a3',
    name: 'Béret Français pour Chien',
    brand: 'Parisian Pets',
    price: 25,
    category: 'hat',
    description: 'Une touche de chic français pour les petites occasions.',
    imageUrl: 'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?q=80&w=1336&auto=format&fit=crop',
    buyUrl: '#'
  },
  {
    id: 'a4',
    name: 'Jouet Corde en Coton Bio',
    brand: 'EcoPaw',
    price: 15,
    category: 'toy',
    description: 'Durable, naturel et amusant pour les séances de jeu.',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
    buyUrl: '#'
  },
  {
    id: 'a5',
    name: 'Harnais Design Marbre',
    brand: 'Zee.Dog',
    price: 35,
    category: 'other',
    description: 'Style unique et ergonomie parfaite.',
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop',
    buyUrl: '#'
  },
  {
    id: 'a6',
    name: 'Laisse Multi-position',
    brand: 'Found My Animal',
    price: 64,
    category: 'leash',
    description: 'Corde de marine artisanale, robuste et colorée.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1200&auto=format&fit=crop',
    buyUrl: '#'
  }
];

export const LOOKS: Look[] = [
  {
    id: 'l1',
    title: 'Paris Chic Beige',
    description: 'L\'élégance parisienne intemporelle en tons neutres.',
    imageUrl: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1200&auto=format&fit=crop',
    size: 'small',
    style: 'chic',
    weather: 'mid-season',
    products: [PRODUCTS[0], PRODUCTS[3], PRODUCTS[2]],
    pinterestUrl: 'https://www.pinterest.com/search/pins/?q=dog%20owner%20matching%20beige%20outfit'
  },
  {
    id: 'l2',
    title: 'Streetwear Urbain',
    description: 'Un look dynamique et moderne pour la ville.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'streetwear',
    weather: 'mid-season',
    products: [PRODUCTS[1], PRODUCTS[4], PRODUCTS[5]],
    pinterestUrl: 'https://www.pinterest.com/search/pins/?q=dog%20streetwear%20style'
  },
  {
    id: 'l3',
    title: 'Classique Élégant',
    description: 'Le charme des traditions avec une touche de luxe.',
    imageUrl: 'https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    style: 'elegant',
    weather: 'winter',
    products: [PRODUCTS[9], PRODUCTS[8], PRODUCTS[6]],
    pinterestUrl: 'https://www.pinterest.com/search/pins/?q=elegant%20dog%20luxury%20fashion'
  },
  {
    id: 'l4',
    title: 'Minimalisme Allemand',
    description: 'Des lignes pures et une esthétique sobre.',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    style: 'chic',
    weather: 'mid-season',
    products: [PRODUCTS[3], PRODUCTS[0], PRODUCTS[4]]
  },
  {
    id: 'l5',
    title: 'Aventure Outdoor',
    description: 'Prêt pour l\'exploration sauvage avec style.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    style: 'casual',
    weather: 'winter',
    products: [PRODUCTS[5], PRODUCTS[6], PRODUCTS[7]]
  },
  {
    id: 'l6',
    title: 'Matchy-Matchy',
    description: 'Le duo parfait, totalement coordonné.',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'streetwear',
    weather: 'mid-season',
    products: [PRODUCTS[1], PRODUCTS[2], PRODUCTS[0]]
  },
  {
    id: 'l7',
    title: 'Douceur Hivernale',
    description: 'Un pull tout doux pour les matins froids.',
    imageUrl: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    style: 'casual',
    weather: 'winter',
    products: [PRODUCTS[3]]
  },
  {
    id: 'l8',
    title: 'Style Vintage',
    description: 'Le retour des classiques indémodables.',
    imageUrl: 'https://images.unsplash.com/photo-1583511666407-5f06533f2113?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'elegant',
    weather: 'mid-season',
    products: [PRODUCTS[9]]
  },
  {
    id: 'l9',
    title: 'Bohème Automnal',
    description: 'Des textures riches et des couleurs chaudes pour les balades en forêt.',
    imageUrl: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'casual',
    weather: 'mid-season',
    products: [PRODUCTS[4], PRODUCTS[0]]
  },
  {
    id: 'l10',
    title: 'Jaune Éclatant',
    description: 'Affronter la pluie avec audace et visibilité.',
    imageUrl: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'streetwear',
    weather: 'mid-season',
    products: [PRODUCTS[7], PRODUCTS[5]]
  },
  {
    id: 'l11',
    title: 'Look Signature Red',
    description: 'Le rouge passion pour un style affirmé.',
    imageUrl: 'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    style: 'chic',
    weather: 'winter',
    products: [PRODUCTS[1], PRODUCTS[9]]
  },
  {
    id: 'l12',
    title: 'Exploration Nordique',
    description: 'Isolation maximale pour les climats les plus rudes.',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    style: 'casual',
    weather: 'winter',
    products: [PRODUCTS[5], PRODUCTS[2]]
  },
  {
    id: 'l13',
    title: 'Casual Sunday',
    description: 'Confort absolu pour un dimanche relaxant.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    style: 'casual',
    weather: 'mid-season',
    products: [PRODUCTS[0], PRODUCTS[3]]
  },
  {
    id: 'l14',
    title: 'Night Walk Safety',
    description: 'Sécurité et style pour vos sorties nocturnes.',
    imageUrl: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'streetwear',
    weather: 'mid-season',
    products: [PRODUCTS[4], PRODUCTS[1]]
  },
  {
    id: 'l15',
    title: 'Luxe Discret',
    description: 'L\'art de l\'élégance sans effort.',
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200',
    size: 'medium',
    style: 'elegant',
    weather: 'mid-season',
    products: [PRODUCTS[9], PRODUCTS[3]]
  },
  {
    id: 'l16',
    title: 'High Tech Adventure',
    description: 'La technologie au service du confort canin.',
    imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    style: 'streetwear',
    weather: 'winter',
    products: [PRODUCTS[5], PRODUCTS[4]]
  }
];

