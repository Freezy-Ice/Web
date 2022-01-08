import * as React from 'react';
import { Grid } from '@mui/material';
import AcceptingShopDetails from './AcceptingShopDetails';
import { GetUnacceptedShops } from '../../Store/Reducer/ShopAdmin/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import { adminShopsState } from '../../Store/selectors';

export default function AcceptingShops() {
    const shops = useAppSelector(adminShopsState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        GetUnacceptedShops(dispatch, 1);
    }, []);

    return (
        <Grid>
            <Grid item xs={12}>
                {shops?.data?.map((shop) => (
                    <AcceptingShopDetails shop={shop} />
                ))}
            </Grid>
        </Grid>
    );
}
