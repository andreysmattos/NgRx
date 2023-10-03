import { createActionGroup, emptyProps } from '@ngrx/store';

export const ProductPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Toggle Show Product Code': emptyProps(),
    'Load Products': emptyProps(),
  },
});
