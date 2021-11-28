import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Avatar, Button, Grid, IconButton, Rating } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ShopResponse } from '../../Store/Interface/Shop/ShopResponse';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: '20%',
            marginRight: '20%',
            display: 'flex',
            flexDirection: 'column',
            border: '3px solid #81E2DC',
            maxWidth: '60vw',
        },
        pictureBox: {
            maxHeight: '30vh',
            overflow: 'hidden',
        },
        rateFrame: {
            display: 'flex',
            justifyContent: 'right',
            textAlign: 'right',
        },
        rate: {
            paddingTop: '10%',
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
    shop: ShopResponse;
}

export default function ShopBaseInfo(props: IDefaultProps) {
    const { shop } = props;
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);

    return (
        <div className={classes.root}>
            <div className={classes.pictureBox}>
                <img src={shop.picture} alt="" width="100%" height="100%" />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <h3>{shop.name}</h3>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.rateFrame}>
                        <Rating
                            name="read-only"
                            value={shop.grade}
                            precision={0.5}
                            readOnly
                            className={classes.rate}
                        />
                        <h5>{shop.grade}</h5>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>Godziny otwarcia:</div>
                </Grid>
                <Grid item xs={6}>
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
                        <IconButton size="large">
                            {shop.isFavorite ? (
                                <FavoriteIcon style={{ fill: 'red' }} />
                            ) : (
                                <FavoriteIcon />
                            )}
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <p>{shop.description}</p>
                </Grid>
            </Grid>
        </div>
    );
}
