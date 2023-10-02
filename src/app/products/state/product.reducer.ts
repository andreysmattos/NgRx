import { createAction, createReducer, on } from '@ngrx/store';

export interface productsState {
  showProductCode: boolean;
}

const initialState: productsState = {
  showProductCode: true,
};

export const productReducer = createReducer(
  initialState,
  on(createAction('[Product Page] Toggle Show Product Code'), (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  }))
);
