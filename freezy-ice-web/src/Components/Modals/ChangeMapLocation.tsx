import { AppBar, Button, Dialog, IconButton, Rating, Toolbar } from '@mui/material';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import L, { icon, LatLngExpression } from 'leaflet';
import {
    BusinessShopDetailsInterface,
    CoordsInterface,
} from '../../Store/Interface/BusinessShop/ShopInterface';

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
    coords: CoordsInterface;
    setCoords: Dispatch<SetStateAction<CoordsInterface>>;
}

export default function ChangeMapLocation(props: IDefaultProps) {
    const classes = useStyles();
    const { open, close, setCoords, coords } = props;

    function HandleAddEditPoint() {
        useMapEvents({
            dblclick: (e) => {
                const { lat, lng } = e.latlng;
                setCoords({ lat, lng });
            },
        });
        return null;
    }

    return (
        <Dialog fullScreen open={open} onClose={() => close(false)}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <Button color="inherit" onClick={() => close(false)}>
                        X
                    </Button>
                </Toolbar>
            </AppBar>
            <MapContainer center={{ lat: 52.23, lng: 21.01 }} zoom={6} scrollWheelZoom>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coords !== null ? <Marker position={coords} /> : null}
                <HandleAddEditPoint />
            </MapContainer>
        </Dialog>
    );
}
