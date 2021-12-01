import { ProductState } from './Product/ProductInterface';
import { ShopDetails, ShopsIndex } from './ShopInterface';

export interface ShopState {
    productListState: ProductState | null;
    shopsListState: ShopsIndex | null;
    shopDetails: ShopDetails | null;
}
