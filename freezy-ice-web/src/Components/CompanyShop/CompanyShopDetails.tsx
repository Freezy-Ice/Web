import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Grid, IconButton, Rating } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import { useTranslation } from 'react-i18next';
import '../../Helpers/translations/i18n';
import RoomIcon from '@mui/icons-material/Room';
import { useAppDispatch } from '../../Store';
import { BusinessShopDetailsInterface } from '../../Store/Interface/BusinessShop/ShopInterface';
import EditCompanyShopDetails from '../Modals/EditCompanyShopDetails';
import MapModal from '../Modals/MapModal';

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
        button: {
            '&.MuiButton-outlined': {
                color: 'black',
                border: '1px black solid',
            },
        },
    }),
);

interface IDefaultProps {
    shop: BusinessShopDetailsInterface;
}

export default function CompanyShopDetails(props: IDefaultProps) {
    const { shop } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openMap, setOpenMap] = React.useState(false);
    const { t } = useTranslation();

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
                    <Grid className={classes.buttonBox}>
                        <Button
                            className={classes.button}
                            variant="outlined"
                            size="small"
                            onClick={() => setOpen(true)}
                        >
                            Edytuj szczegóły sklepu
                        </Button>
                    </Grid>
                    <Grid textAlign="center" item xs={10}>
                        <h2>{shop.name}</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={classes.rateFrame}>
                            <Rating name="read-only" value={shop.rating} precision={0.5} readOnly />
                        </div>
                        <div className={classes.buttonBox}>
                            <RoomIcon onClick={() => setOpenMap(true)} />
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
            <MapModal open={openMap} close={setOpenMap} shop={shop} />
            {open && <EditCompanyShopDetails open={open} close={setOpen} shop={shop} />}
        </div>
    );
}
