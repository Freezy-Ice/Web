import { Button, Grid, Pagination, Stack } from '@mui/material';
import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import '../../Helpers/translations/i18n';
import ProductInfo from '../../Components/CompanyShop/CompanyProductInfo';
import { useAppDispatch, useAppSelector } from '../../Store';
import { businessProductState, businessShopDetailsState } from '../../Store/selectors';
import {
    FetchProductsList,
    FetchBusinessShopDetails,
} from '../../Store/Reducer/BusinessShop/action';
import AddProduct from '../../Components/Modals/AddAndUpdateProduct';
import CompanyShopDetails from '../../Components/CompanyShop/CompanyShopDetails';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: '10%',
            marginLeft: '10%',
        },
        container: {
            paddingLeft: '45%',
            alignItems: 'center',
            textAlign: 'center',
        },
        buttonBox: {
            border: '2px  #81E2DC solid',
            width: '180px',
            marginBottom: '5%',
        },
        textColor: {
            color: 'black',
        },
    }),
);

function CompanyShopPage() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const products = useAppSelector(businessProductState);
    const shop = useAppSelector(businessShopDetailsState);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id?: string }>();
    const { t } = useTranslation();
    const handleOpen = () => setOpen(true);

    React.useEffect(() => {
        if (id) {
            FetchProductsList(dispatch, id);
            FetchBusinessShopDetails(dispatch, id);
        }
    }, []);

    return (
        <div>
            {shop !== null ? <CompanyShopDetails shop={shop?.data} /> : null}
            <div className={classes.container}>
                <div className={classes.buttonBox}>
                    <Button onClick={() => setOpen(true)}>Dodaj nowy produkt</Button>
                </div>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2} direction="row" className={classes.root}>
                    {products?.data?.map((product) => (
                        <Grid item xs={12} md={4}>
                            <ProductInfo product={product} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <AddProduct open={open} close={setOpen} product={null} />
        </div>
    );
}

export default CompanyShopPage;
