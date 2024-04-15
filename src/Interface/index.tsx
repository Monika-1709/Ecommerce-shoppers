export interface ProductInterface {
  name: string;
  price: number;
  description: string;
  images: string[];
  _id?: string;
  category: string;
  countInStock: number;
}
