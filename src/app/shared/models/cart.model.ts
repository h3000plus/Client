export interface ICart {
  _id: string;
  resId: string;
  cartId: string;
  name: string;
  image: string;
  description: string;
  quantity: number;
  price: number;
  addon: IIngredient[];
  no: IIngredient[];
}

export interface IIngredient {
  name: string;
  price: number;
  id: string;
  _id: string;
}
