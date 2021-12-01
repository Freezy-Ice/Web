import { ProductState } from './Product/ProductInterface';
import { RatingState } from './Rate/RateInterface';
import { ShopDetails, ShopsIndex } from './ShopInterface';

export interface ShopState {
    productListState: ProductState | null;
    shopsListState: ShopsIndex | null;
    shopDetails: ShopDetails | null;
    ratingsListState: RatingState | null;
}
