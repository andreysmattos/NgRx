import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../products.service';
import { ProductsAPIActions, ProductsPageActions } from './product.actions';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      exhaustMap(() =>
        this.productService.getAll().pipe(
          map((products) =>
            ProductsAPIActions.productsLoadedSuccess({ products })
          ),
          catchError((error) => {
            console.log('error', error);
            return of(
              ProductsAPIActions.productsLoadedFail({ message: error })
            );
          })
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.addProduct),
      mergeMap(({ product }) =>
        this.productService.add(product).pipe(
          map((newProduct) =>
            ProductsAPIActions.productsAddedSuccess({ product: newProduct })
          ),
          catchError((error) => {
            console.log('error', error);
            return of(ProductsAPIActions.productsAddedFail({ message: error }));
          })
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.updateProduct),
      concatMap(({ product }) =>
        this.productService.update(product).pipe(
          map(() => ProductsAPIActions.productsUpdatedSuccess({ product })),
          catchError((error) => {
            console.log('error', error);
            return of(
              ProductsAPIActions.productsUpdatedFail({ message: error })
            );
          })
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.deleteProduct),
      mergeMap(({ id }) =>
        this.productService.delete(id).pipe(
          map(() => ProductsAPIActions.productsDeletedSuccess({ id })),
          catchError((error) => {
            console.log('error', error);
            return of(
              ProductsAPIActions.productsDeletedFail({ message: error })
            );
          })
        )
      )
    )
  );
}
