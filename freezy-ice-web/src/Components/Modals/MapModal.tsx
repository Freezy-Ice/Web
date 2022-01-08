import { AppBar, Button, Dialog, IconButton, Rating, Toolbar } from '@mui/material';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { LatLngExpression } from 'leaflet';
import { ShopDetailsInterface, ShopsInterface } from '../../Store/Interface/Shop/ShopInterface';
import { BusinessShopDetailsInterface } from '../../Store/Interface/BusinessShop/ShopInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    open: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    shops?: Array<ShopsInterface>;
    shop?: ShopsInterface | BusinessShopDetailsInterface;
    shopDetails?: ShopDetailsInterface;
}

export default function MapModal(props: IDefaultProps) {
    const classes = useStyles();
    const { open, close, shops, shop, shopDetails } = props;
    const [coord, setCoord] = React.useState<LatLngExpression | null>(null);
    const [coords, setCoords] = React.useState<Array<LatLngExpression>>([]);

    React.useEffect(() => {
        if (shop && shop !== null && coord === null) {
            setCoord([shop.coords.lat, shop.coords.lng]);
        }
        if (shopDetails && shopDetails !== null && coord === null) {
            setCoord([shopDetails.coords.lat, shopDetails.coords.lng]);
        }
        if (shops && shops !== null && coords.length === 0) {
            shops.map((s) => setCoords((oldArray) => [...oldArray, [s.coords.lat, s.coords.lng]]));
        }
    }, [shopDetails, shops, coords, coord]);

    return (
        <Dialog fullScreen open={open} onClose={() => close(false)}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Button color="inherit" onClick={() => close(false)}>
                        X
                    </Button>
                </Toolbar>
            </AppBar>
            {shops && coords ? (
                <MapContainer center={coords[0]} zoom={13} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {shops.map((item, index) => (
                        <Marker position={coords[index]}>
                            <Popup>
                                <h3>{item.name}</h3>
                                <div>
                                    <Rating
                                        name="read-only"
                                        value={item.rating}
                                        precision={0.5}
                                        readOnly
                                        className={classes.rate}
                                    />
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            ) : null}
            {(shop || shopDetails) && coord ? (
                <MapContainer center={coord} zoom={13} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={coord}>
                        <Popup>
                            <h3>{shop ? shop.name : shopDetails?.name}</h3>
                            <div className={classes.rateFrame}>
                                <Rating
                                    name="read-only"
                                    value={shop ? shop.rating : shopDetails?.rating}
                                    precision={0.5}
                                    readOnly
                                    className={classes.rate}
                                />
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : null}
        </Dialog>
    );
}
