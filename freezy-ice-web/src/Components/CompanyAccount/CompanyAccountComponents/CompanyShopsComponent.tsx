import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Button, Modal, Typography } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import { LatLngExpression } from 'leaflet';
import CompanyShopComponentDetails from './CompanyShopComponentDetails';
import MapModal from '../../Modals/MapModal';

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

export default function CompanyShopComponent() {
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
            <div />
        </div>
    );
}
