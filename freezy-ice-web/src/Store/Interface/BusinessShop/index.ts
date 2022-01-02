import { ProductInterface, ProductState } from './Product/CompanyProductInterface';
import { ShopDetails, ShopsIndex } from './ShopInterface';

export interface BusinessShopState {
    productListState: ProductState | null;
    productDetails: ProductInterface | null;
    shopsListState: ShopsIndex | null;
    shopDetails: ShopDetails | null;
}
