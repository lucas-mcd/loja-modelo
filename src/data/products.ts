export interface Product {
  id: string;
  name: string;
  category: string;
  price?: number;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'camiseta-01',
    name: 'Camiseta Premium Essencial',
    category: 'Camisetas',
    price: 89.90,
    description: 'Camiseta de algodão 100% de alta qualidade. Conforto máximo com acabamento impecável para o dia a dia.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Camiseta Premium Essencial',
    featured: true
  },
  {
    id: 'calca-01',
    name: 'Calça Jeans Premium Slim',
    category: 'Calças',
    price: 189.90,
    description: 'Jeans premium com corte slim moderno. Tecido importado com excelente caimento e durabilidade.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Calça Jeans Premium Slim',
    featured: true
  },
  {
    id: 'tenis-01',
    name: 'Tênis Esportivo Elite',
    category: 'Calçados',
    price: 249.90,
    description: 'Tênis com tecnologia de amortecimento avançado. Perfeito para esportes e uso casual com máximo conforto.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Tênis Esportivo Elite',
    featured: true
  },
  {
    id: 'vestido-01',
    name: 'Vestido Social Elegante',
    category: 'Vestidos',
    price: 279.90,
    description: 'Vestido social em tecido nobre. Corte elegante que realça a silhueta, ideal para eventos especiais.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Vestido Social Elegante',
  },
  {
    id: 'bolsa-01',
    name: 'Bolsa Estruturada Minimalista',
    category: 'Acessórios',
    price: 199.90,
    description: 'Bolsa com design minimalista e estruturado. Versátil para combinar com qualquer look casual ou profissional.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Bolsa Estruturada Minimalista',
  },
  {
    id: 'jaqueta-01',
    name: 'Jaqueta Jeans Clássica',
    category: 'Jaquetas',
    description: 'Jaqueta jeans clássica com lavagem especial. Peça coringa que combina com tudo e nunca sai de moda.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Jaqueta Jeans Clássica',
  },
  {
    id: 'sapato-01',
    name: 'Sapato Social Premium',
    category: 'Calçados',
    price: 219.90,
    description: 'Sapato social em couro genuíno. Elegância e conforto combinados para ocasiões formais.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Sapato Social Premium',
  },
  {
    id: 'shorts-01',
    name: 'Shorts Comfort Verão',
    category: 'Shorts',
    price: 79.90,
    description: 'Shorts em tecido leve e respirável. Perfeito para o verão com máximo conforto e estilo.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Shorts Comfort Verão',
  },
  {
    id: 'mochila-01',
    name: 'Mochila Urbana Funcional',
    category: 'Acessórios',
    price: 139.90,
    description: 'Mochila com múltiplos compartimentos e design urbano. Prática e estilosa para o dia a dia.',
    image: '/cereon-xl.webp',
    imageAlt: 'Cereon - Mochila Urbana Funcional',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.id === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured).slice(0, 3);
}
