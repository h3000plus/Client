import { ICart } from "./cart.model";

export interface IScheduleOrder {
    deliveryFee?: number,
    deliveryTime?: number,
    cartItems: ICart[],
    subtotal: number,
    orderStatus?: string,
    ordertype: string,
    delivery: boolean,
    pickup: boolean,
    date: string,
    schedule: string
}