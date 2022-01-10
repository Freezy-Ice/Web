import { Paper, Rating } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import RoomIcon from '@mui/icons-material/Room';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { stringDateFormat } from '../../../Helpers/date';
import { DateTimeFormatEnum } from '../../../Helpers/enums';
import MapModal from '../../Modals/MapModal';
import { ShopsInterface } from '../../../Store/Interface/Shop/ShopInterface';

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
    }),
);

interface IDefaultProps {
    shop: ShopsInterface;
}

export default function HomeComponentDetails(props: IDefaultProps) {
    const classes = useStyles();
    const { shop } = props;
    const [openMap, setOpenMap] = React.useState(false);

    return (
        <div className={classes.root} id={shop.id.toString()}>
            <Paper className={classes.picture}>
                <Link to={`/shop/${shop.id}`} style={{ textDecoration: 'none' }}>
                    <img src={shop.image.url} alt="" width="100%" height="100%" />
                </Link>
            </Paper>
            <Paper className={classes.deatils}>
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
                    <h5>
                        {shop.city.name} {shop.address}
                    </h5>
                    <h5>
                        Otwarte od: {shop.openingHours.from} do: {shop.openingHours.to}
                    </h5>
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
            </Paper>
            <MapModal open={openMap} close={setOpenMap} shop={shop} />
        </div>
    );
}
