import { Category } from "./category.model";

export interface ProductModel{
    id: number;
    title: string;
    price: number;
    image: string;
    creationAt: string;
    description: string;
    category: Category;
}