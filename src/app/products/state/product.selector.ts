import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productsState } from './product.reducer';
import { sumProducts } from 'src/app/utils/sum-products';

export const selectProductsSate =
  createFeatureSelector<productsState>('products');

export const selectProducts = createSelector(
  selectProductsSate,
  (productState) => productState.products
);

export const selectProductsLoading = createSelector(
  selectProductsSate,
  (productState) => productState.loading
);

export const selectProductsCode = createSelector(
  selectProductsSate,
  (productState) => productState.showProductCode
);

export const selectProductsErrorMessage = createSelector(
  selectProductsSate,
  (productState) => productState.errorMessage
);

export const selectProductsTotal = createSelector(selectProducts, sumProducts);
