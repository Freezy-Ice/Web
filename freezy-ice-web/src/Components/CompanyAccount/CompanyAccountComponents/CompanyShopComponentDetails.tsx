import { Paper, Rating } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import RoomIcon from '@mui/icons-material/Room';
import * as React from 'react';
import { stringDateFormat } from '../../../Helpers/date';
import { DateTimeFormatEnum } from '../../../Helpers/enums';
import MapModal from '../../Modals/MapModal';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '3px solid #81E2DC',
            marginBottom: '5px',
            display: 'flex',
            maxHeight: '25vh',
        },
        picture: {
            flexGrow: 1,
            maxWidth: '30%',
        },
        deatils: {
            display: 'flex',
            flexGrow: 2,
            justifyContent: 'space-between',
            padding: '2%',
        },
        detailsLeft: {
            textAlign: 'left',
        },
        detailsRight: {
            justifyContent: 'right',
            textAlign: 'right',
        },
        rateFrame: {
            display: 'flex',
            justifyContent: 'right',
            textAlign: 'right',
        },
        rate: {
            paddingTop: '10%',
        },
    }),
);

export default function CompanyShopComponentDetails() {
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);
}
