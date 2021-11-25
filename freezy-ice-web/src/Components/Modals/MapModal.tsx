import { AppBar, Dialog, IconButton, Toolbar } from '@mui/material';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { Dispatch, SetStateAction } from 'react';
import { LatLngExpression } from 'leaflet';
import { ShopResponse } from '../../Store/Interface/Shop/ShopResponse';

interface IDefaultProps {
    open: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    shops?: Array<ShopResponse>;
    shop?: ShopResponse;
}

export default function MapModal(props: IDefaultProps) {
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
                            <Popup>{item.name}</Popup>
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
                        <Popup>{shop.name}</Popup>
                    </Marker>
                </MapContainer>
            ) : null}
        </Dialog>
    );
}
