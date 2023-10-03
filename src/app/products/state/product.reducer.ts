import { createReducer, on } from '@ngrx/store';
import { ProductPageActions } from './product.actions';

export interface productsState {
  showProductCode: boolean;
}

const initialState: productsState = {
  showProductCode: true,
};

export const productReducer = createReducer(
  initialState,
  on(ProductPageActions.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  }))
);
