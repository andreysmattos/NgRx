import { createReducer, on } from '@ngrx/store';
import { ProductPageActions, ProductsAPIActions } from './product.actions';
import { Product } from '../product.model';

export interface productsState {
  showProductCode: boolean;
  loading: boolean;
  products: Product[];
}

const initialState: productsState = {
  showProductCode: true,
  loading: false,
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(ProductPageActions.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  })),
  on(ProductPageActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(ProductsAPIActions.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  }))
);
