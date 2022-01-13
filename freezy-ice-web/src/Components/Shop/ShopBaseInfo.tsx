import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Grid, IconButton, Rating } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useTranslation } from 'react-i18next';
import '../../Helpers/translations/i18n';

import { ShopDetailsInterface } from '../../Store/Interface/Shop/ShopInterface';
import { PostLikeAndDislikeShop } from '../../Store/Reducer/Shop/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import MapModal from '../Modals/MapModal';
import { userState } from '../../Store/selectors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        shopDetailsFrame: {
            marginLeft: '10%',
            marginRight: '10%',
            display: 'flex',
            flexDirection: 'column',
            border: '3px solid #81E2DC',
            maxWidth: '80vw',
            marginBottom: '2%',
        },
        pictureBox: {
            maxHeight: '30vh',
            overflow: 'hidden',
        },
        rateFrame: {
            textAlign: 'center',
        },
        buttonBox: {
            textAlign: 'center',
        },
        titleFrame: {
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '2px solid #81E2DC',
        },
        hourFrame: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            borderBottom: '2px solid #81E2DC',
            alignItems: 'center',
        },
        hourBox: {
            display: 'flex',
            flexDirection: 'row',
        },
        hours: {
            margin: '5px',
        },
        descriptionFrame: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
    }),
);

interface IDefaultProps {
    shop: ShopDetailsInterface;
}

export default function ShopBaseInfo(props: IDefaultProps) {
    const { shop } = props;
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(userState);

    const handleFavourite = () => {
        PostLikeAndDislikeShop(dispatch, shop.id.toString(), shop.favourite);
    };

    return (
        <div className={classes.shopDetailsFrame}>
            <div className={classes.pictureBox}>
                <img src={shop.imageUrl} alt="" width="100%" height="100%" />
            </div>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{ backgroundColor: 'primary.main' }}
                    className={classes.titleFrame}
                >
                    <Grid textAlign="center" item xs={10}>
                        <h2>{shop.name}</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.rateFrame}>
                            <Rating name="read-only" value={shop.rating} precision={0.5} readOnly />
                        </div>
                        <div className={classes.buttonBox}>
                            <Button onClick={() => setOpenMap(true)}>
                                <MapTwoToneIcon fontSize="large" color="action" />
                            </Button>
                            {userInfo !== null && (
                                <IconButton size="large" onClick={() => handleFavourite()}>
                                    {shop.favourite ? (
                                        <FavoriteIcon style={{ fill: 'red' }} />
                                    ) : (
                                        <FavoriteIcon />
                                    )}
                                </IconButton>
                            )}
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.hourFrame}>
                        <h3>{t('openingHours')}:</h3>
                        {shop.openingHours.map((oh) => (
                            <div className={classes.hourBox}>
                                <h5 className={classes.hours}>{t(oh.day)}:</h5>
                                {oh.open ? (
                                    <p className={classes.hours}>
                                        {oh.from}-{oh.to}
                                    </p>
                                ) : (
                                    <p className={classes.hours}>{t('closed')}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.descriptionFrame}>
                    <p>{shop.description}</p>
                </Grid>
            </Grid>
            <MapModal open={openMap} close={setOpenMap} shopDetails={shop} />
        </div>
    );
}
