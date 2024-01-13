export interface Restaurant {
    _id: string;
    name: string;
    image: string;
    deliveryFee: number;
    deliveryTime: number;
    like: string;
    category_id: string;
    delivery: boolean;
    pickup: boolean;
}