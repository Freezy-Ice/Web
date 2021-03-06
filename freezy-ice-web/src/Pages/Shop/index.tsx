import { Button, Grid, Pagination, Rating, Stack, TextField } from '@mui/material';
import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import '../../Helpers/translations/i18n';
import ProductInfo from '../../Components/Shop/ProductInfo';
import { useAppDispatch, useAppSelector } from '../../Store';
import { productState, ratingsState, shopDetailsState, userState } from '../../Store/selectors';
import { FetchProductsList, FetchRatings, FetchShopDetails } from '../../Store/Reducer/Shop/action';
import ShopBaseInfo from '../../Components/Shop/ShopBaseInfo';
import ShopRating from '../../Components/Rating/ShopRating';
import AddRating from '../../Components/Rating/AddRatingComponent';

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
    const ratings = useAppSelector(ratingsState);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id?: string }>();
    const { t } = useTranslation();
    const userInfo = useAppSelector(userState);

    React.useEffect(() => {
        if (id) {
            FetchProductsList(dispatch, id);
        }
        if (id) {
            FetchShopDetails(dispatch, id);
        }
        if (id) {
            FetchRatings(dispatch, 1, id);
        }
    }, []);

    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        if (ratings !== null) FetchRatings(dispatch, value, id!);
    };

    return (
        <div>
            {shop && shop !== null ? <ShopBaseInfo shop={shop?.data} /> : null}
            <div className={classes.root}>
                <Grid container spacing={2} direction="row" className={classes.root}>
                    {products?.data?.map((product) => (
                        <Grid item xs={12} md={4}>
                            <ProductInfo product={product} />
                        </Grid>
                    ))}
                </Grid>
                {ratings !== null ? (
                    <div>
                        <Grid container spacing={2} direction="row" className={classes.root}>
                            <h1>{t('rates')}:</h1>
                            {ratings?.data?.map((rating) => (
                                <Grid item xs={12} md={12}>
                                    <ShopRating rating={rating} />
                                </Grid>
                            ))}
                            <Stack spacing={2}>
                                <Pagination
                                    color="primary"
                                    size="large"
                                    count={ratings?.paginationData.total / 5}
                                    page={ratings?.paginationData.currentPage}
                                    onChange={handlePagination}
                                />
                            </Stack>
                        </Grid>
                    </div>
                ) : null}
                {shop !== null && userInfo !== null && <AddRating shopId={shop.data.id} />}
            </div>
        </div>
    );
}

export default ShopPage;
