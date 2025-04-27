export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'men' | 'women' | 'kids';
  type: 'sneakers' | 'boots' | 'sandals' | 'formal';
  availableSizes: string[];
  colors: string[];
  isFeatured: boolean;
  isNew: boolean;
  rating: number;
  reviews: number;
}