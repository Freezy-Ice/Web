import { Grid } from '@mui/material';
import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import { useParams } from 'react-router';
import ProductInfo from '../../Components/Shop/ProductInfo';
import { useAppDispatch, useAppSelector } from '../../Store';
import { productState, shopDetailsState } from '../../Store/selectors';
import { FetchProductsList, FetchShopDetails } from '../../Store/Reducer/Shop/action';
import ShopBaseInfo from '../../Components/Shop/ShopBaseInfo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: '10%',
            marginLeft: '10%',
        },
    }),
);

function ShopPage() {
    const classes = useStyles();
    const products = useAppSelector(productState);
    const shop = useAppSelector(shopDetailsState);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id?: string }>();

    React.useEffect(() => {
        if (id && products === null) {
            FetchProductsList(dispatch, id);
        }
        if (id && shop === null) {
            FetchShopDetails(dispatch, id);
        }
    }, [products, dispatch, id, shop]);

    return (
        <div>
            {shop !== null ? <ShopBaseInfo shop={shop?.data} /> : null}
            <div className={classes.root}>
                <Grid container spacing={2} direction="row" className={classes.root}>
                    {products?.data?.map((product) => (
                        <Grid item xs={12} md={4}>
                            <ProductInfo product={product} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default ShopPage;
