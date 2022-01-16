import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import CompanyShopComponentDetails from './CompanyShopComponentDetails';
import MapModal from '../../Modals/MapModal';
import { ShopsIndex } from '../../../Store/Interface/BusinessShop/ShopInterface';

interface IDefaultProps {
    shops: ShopsIndex;
}

export default function CompanyShopComponent(props: IDefaultProps) {
    const { shops } = props;

    return (
        <Grid>
            <Grid item xs={12}>
                {shops?.data?.map((shop) => (
                    <CompanyShopComponentDetails shop={shop} />
                ))}
            </Grid>
        </Grid>
    );
}
