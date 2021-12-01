import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import HomeComponentDetails from './HomeComponentDetails';
import MapModal from '../../Modals/MapModal';
import { ShopsIndex } from '../../../Store/Interface/Shop/ShopInterface';

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
    shops: ShopsIndex;
}

export default function HomeComponents(props: IDefaultProps) {
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
                {shops?.data?.map((shop) => (
                    <HomeComponentDetails shop={shop} />
                ))}
            </div>
            <MapModal open={openMap} close={setOpenMap} shops={shops?.data} />
        </div>
    );
}
