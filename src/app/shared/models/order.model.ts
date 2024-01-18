import { ICart } from "./cart.model";

export interface IOrder {
    _id: string,
    deliveryFee: number,
    deliveryTime: number,
    cartItems: ICart[],
    subtotal: number
}