import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCart from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<fromCart.CartState>(
  fromCart.cartFeatureKey
);

export const selectProductCart = createSelector(
  selectCartState,
  (state: fromCart.CartState) => state.products
);