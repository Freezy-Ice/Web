import {
    Box,
    Collapse,
    Grid,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Rating,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import RoomIcon from '@mui/icons-material/Room';
import * as React from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import MapModal from '../../Modals/MapModal';
import { BusinessShopDetailsInterface } from '../../../Store/Interface/BusinessShop/ShopInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '3px solid #81E2DC',
            marginBottom: '1px',
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

interface IDefaultProps {
    shop: BusinessShopDetailsInterface;
}

export default function CompanyShopComponentDetails(props: IDefaultProps) {
    const { shop } = props;
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    console.log('CompanyShopComponentDetails', shop);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box className={classes.root} id={shop.id.toString()}>
            <Grid className={classes.picture}>
                <Link to={`/shop/${shop.id}`} style={{ textDecoration: 'none' }}>
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
                </div>
                <div className={classes.detailsRight}>
                    <RoomIcon className={classes.detailsRight} onClick={() => setOpenMap(true)} />
                    <h5>{shop.address}</h5>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon />
                        <ListItemText primary="Inbox" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>
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
