import { IProduct } from "../products/products.type";

export interface IOrder{
    id:string;
    userId: string;
    products: IProduct[];
    totalPrice: number;
}