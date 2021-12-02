import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Button, Modal, Typography } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import { LatLngExpression } from 'leaflet';
import CompanyShopComponentDetails from './CompanyShopComponentDetails';
import MapModal from '../../Modals/MapModal';
import { ShopResponse } from '../../../Store/Interface/Shop/ShopResponse';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: '5%',
            marginRight: '5%',
            display: 'flex',
            flexDirection: 'column',
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
    shops: Array<ShopResponse>;
}

export default function CompanyShopComponent(props: IDefaultProps) {
    const { shops } = props;
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);

    return (
        <div className={classes.root}>
            <div className={classes.buttonBox}>
                <Button
                    className={classes.button}
                    variant="contained"
                    onClick={() => setOpenMap(true)}
                >
                    <MapTwoToneIcon fontSize="large" color="action" />
                </Button>
            </div>
            <div>
                {shops.map((shop) => (
                    <CompanyShopComponentDetails shop={shop} />
                ))}
            </div>
            <MapModal open={openMap} key={shops.length} close={setOpenMap} shops={shops} />
        </div>
    );
}
