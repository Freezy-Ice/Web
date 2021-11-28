import { AppBar, Dialog, IconButton, Rating, Toolbar } from '@mui/material';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { Dispatch, SetStateAction } from 'react';
import { LatLngExpression } from 'leaflet';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { ShopResponse } from '../../Store/Interface/Shop/ShopResponse';

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
    shops?: Array<ShopResponse>;
    shop?: ShopResponse;
}

export default function MapModal(props: IDefaultProps) {
    const classes = useStyles();
    const { open, close, shops, shop } = props;

    return (
        <Dialog fullScreen open={open} onClose={() => close(false)}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => close(false)}
                        aria-label="close"
                    >
                        <CloseOutlined />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {shops ? (
                <MapContainer center={shops[0].cords} zoom={13} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {shops.map((item) => (
                        <Marker position={item.cords}>
                            <Popup>
                                <h3>{item.name}</h3>
                                <div>
                                    <Rating
                                        name="read-only"
                                        value={item.grade}
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
            {shop ? (
                <MapContainer center={shop.cords} zoom={13} scrollWheelZoom>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={shop.cords}>
                        <Popup>
                            <h3>{shop.name}</h3>
                            <div className={classes.rateFrame}>
                                <Rating
                                    name="read-only"
                                    value={shop.grade}
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
