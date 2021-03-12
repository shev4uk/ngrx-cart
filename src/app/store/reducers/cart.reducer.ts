import { Action, createReducer, on } from "@ngrx/store"
import * as CartActions from '../actions/cart.actions';
import { Product } from "src/app/products/product.model";
export const cartFeatureKey = 'cart';
export interface CartState {
  products: Product[]
}
export const initialState: CartState = {
  products: []
}

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addCart, (state: CartState, { product }) => {
    const isProductIndex = state.products.findIndex((p) => p.id === product.id);
    if (isProductIndex !== -1) {
      return ({
        ...state,
        products: state.products.map((p, index) => index === isProductIndex
          ? {
            ...p,
            quantity: +p.quantity + +product.quantity
          }
          : p)
      })
    } else {
      return ({
        ...state,
        products: [
          ...state.products, product
        ]
      })
    }
  }),
  on(CartActions.removeProductCart, (state: CartState, { id }) =>
  ({
    ...state,
    products: state.products.filter((product) => product.id !== id)
  })
  ),
  on(CartActions.updateProductCart, (state: CartState, { product, quantity }) => {
    return ({
      ...state,
      products: state.products.map(p => ({ ...p }))
        .map(p => {
          if (p.id === product.id) {
            return {
              ...p,
              quantity
            }
          } else {
            return p
          }
        })
    })
  }
  ),
  on(CartActions.deleteCart, (state: CartState) =>
  ({
    ...state,
    products: []
  })
  )
);
export function reducer(state: CartState | undefined, action: Action): any {
  return cartReducer(state, action);
}