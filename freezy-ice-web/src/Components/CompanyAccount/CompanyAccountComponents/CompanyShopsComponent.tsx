import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import CompanyShopComponentDetails from './CompanyShopComponentDetails';
import MapModal from '../../Modals/MapModal';
import { ShopsIndex } from '../../../Store/Interface/BusinessShop/ShopInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: '5%',
            marginRight: '5%',
            alignContent: 'center',
        },
        buttonBox: {
            marginBottom: '1%',
        },
        button: {
            float: 'right',
        },
    }),
);

interface IDefaultProps {
    shops: ShopsIndex;
}

export default function CompanyShopComponent(props: IDefaultProps) {
    const { shops } = props;
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);
    console.log(shops, 'compone');

    return (
        <Grid>
            <Grid item xs={12}>
                {shops?.data?.map((shop) => (
                    <CompanyShopComponentDetails shop={shop} />
                ))}
            </Grid>
            {/* {shops?.data?.map((shop) => ( <MapModal open={openMap} close={setOpenMap} shop={shop} />))} */}
        </Grid>
    );
}
