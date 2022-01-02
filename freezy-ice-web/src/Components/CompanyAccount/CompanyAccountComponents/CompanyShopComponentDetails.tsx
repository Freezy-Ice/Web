import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Collapse,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Rating,
    Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import RoomIcon from '@mui/icons-material/Room';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import MapModal from '../../Modals/MapModal';
import { BusinessShopDetailsInterface } from '../../../Store/Interface/BusinessShop/ShopInterface';
import '../../../Helpers/translations/i18n';
import { useAppDispatch } from '../../../Store';
import { RemoveShop } from '../../../Store/Reducer/BusinessShop/action';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '3px solid #81E2DC',
            marginBottom: '1px',
            display: 'flex',
            minHeight: '25vh',
        },
        picture: {
            flexGrow: 1,
            width: '30%',
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
        hours: {
            margin: '5px',
        },
    }),
);

interface IDefaultProps {
    shop: BusinessShopDetailsInterface;
}

export default function CompanyShopComponentDetails(props: IDefaultProps) {
    const { shop } = props;
    const { t } = useTranslation();
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const dispatch = useAppDispatch();

    const handleRemoveShop = () => {
        RemoveShop(dispatch, shop.id.toString(), 1);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box className={classes.root} id={shop.id.toString()}>
            <Grid className={classes.picture}>
                <Link to={`/companyShop/${shop.id}`} style={{ textDecoration: 'none' }}>
                    <img src={shop.imageUrl} alt="" width="100%" height="100%" />
                </Link>
            </Grid>
            <Grid className={classes.deatils}>
                <div className={classes.detailsLeft}>
                    <h2>{shop.name}</h2>
                    {shop.description.length > 100 ? (
                        <h4>{shop.description.slice(0, 100)}...</h4>
                    ) : (
                        shop.description
                    )}
                    <h5>
                        Ostatnia aktualizacja:
                        {shop.updatedAt}
                    </h5>
                    <Button onClick={() => handleRemoveShop()}>Usuń lodziarnię</Button>
                </div>
                <div className={classes.detailsRight}>
                    <RoomIcon className={classes.detailsRight} onClick={() => setOpenMap(true)} />
                    <h5>{shop.address}</h5>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Godziny otwarcia</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {shop.openingHours.map((openingHour) => (
                                <Typography>
                                    <h5 className={classes.hours}>{t(openingHour.day)}:</h5>
                                    {openingHour.open ? (
                                        <p className={classes.hours}>
                                            {openingHour.from}-{openingHour.to}
                                        </p>
                                    ) : (
                                        <p className={classes.hours}>{t('closed')}</p>
                                    )}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <div className={classes.rateFrame}>
                        <Rating
                            name="read-only"
                            value={shop.rating}
                            precision={0.5}
                            readOnly
                            className={classes.rate}
                        />
                        <h5>{shop.rating} </h5>
                    </div>
                </div>
            </Grid>
            <MapModal open={openMap} close={setOpenMap} shop={shop} />
        </Box>
    );
}
