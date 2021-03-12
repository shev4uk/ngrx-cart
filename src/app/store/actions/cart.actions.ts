import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/products/product.model";

export const addCart = createAction(
  '[Cart] Add to cart',
  (product: Product) => ({product})
)

export const removeProductCart = createAction(
  '[Cart] Remove product from cart',
  (id: number) => ({id})
)

export const updateProductCart = createAction(
  '[Cart] Update product from cart',
  (product: Product, quantity: number) => ({product, quantity})
)

export const deleteCart = createAction(
  '[Cart] Clean cart'
)