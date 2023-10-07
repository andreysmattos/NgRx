import { Component } from '@angular/core';
import { sumProducts } from 'src/app/utils/sum-products';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { Store } from '@ngrx/store';
import {
  ProductsPageActions,
  ProductsAPIActions,
} from '../state/product.actions';
import {
  selectProducts,
  selectProductsCode,
  selectProductsErrorMessage,
  selectProductsLoading,
  selectProductsTotal,
} from '../state/product.selector';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products$ = this.store.select(selectProducts);
  total$ = this.store.select(selectProductsTotal);
  loading$ = this.store.select(selectProductsLoading);
  showProductCode$ = this.store.select(selectProductsCode);

  errorMessage$ = this.store.select(selectProductsErrorMessage);

  constructor(private store: Store) {
    this.store.subscribe({ next: (value) => console.log('value', value) });
  }

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageActions.toggleShowProductCode());
  }
}
