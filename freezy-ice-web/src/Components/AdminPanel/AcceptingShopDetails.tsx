import { Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import * as React from 'react';
import AdminShopInterface from '../../Store/Interface/AdminShop/AdminShopInterface';
import { useAppDispatch } from '../../Store';
import { PostAcceptedShop } from '../../Store/Reducer/ShopAdmin/action';

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
    shop: AdminShopInterface;
}

export default function AcceptingShopDetails(props: IDefaultProps) {
    const { shop } = props;
    const classes = useStyles();
    const dispatch = useAppDispatch();
    console.log('shop', shop);

    const handleAcceptedShop = () => {
        PostAcceptedShop(dispatch, shop.id.toString(), 1);
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
                </div>
                <div className={classes.detailsRight}>
                    <h5>{shop.address}</h5>
                    <Button onClick={handleAcceptedShop}>Akceptuj</Button>
                </div>
            </Grid>
        </Box>
    );
}
