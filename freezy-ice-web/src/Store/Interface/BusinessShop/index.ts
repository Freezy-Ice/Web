import { ProductInterface, ProductState } from './Product/CompanyProductInterface';
import { ImageState, ShopDetails, ShopsIndex } from './ShopInterface';

export interface BusinessShopState {
    productListState: ProductState | null;
    productDetails: ProductInterface | null;
    shopsListState: ShopsIndex | null;
    shopDetails: ShopDetails | null;
    imageState: ImageState | null;
}
