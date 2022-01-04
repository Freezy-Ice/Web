import { AppBar, Dialog, IconButton, Rating, Toolbar } from '@mui/material';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { LatLngExpression } from 'leaflet';
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
    shopDetails?: BusinessShopDetailsInterface;
}

function ChangeMapView({ coords }: { coords: any }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
}

export default function ChangeMapLocation(props: IDefaultProps) {
    const classes = useStyles();
    const { open, close, shopDetails } = props;
    const [coord, setCoord] = React.useState<LatLngExpression | null>(null);

    React.useEffect(() => {
        if (shopDetails && shopDetails !== null && coord === null) {
            setCoord([shopDetails.coords.lat, shopDetails.coords.lng]);
        }
    }, []);

    const handleClikMap = (event: any) => {
        setCoord(event.latlang);
    };

    return (
        <Dialog fullScreen open={open} onClose={() => close(false)}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => close(false)}
                        aria-label="close"
                    />
                </Toolbar>
            </AppBar>
            <MapContainer center={{ lat: 52.23, lng: 21.01 }} zoom={13} scrollWheelZoom>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coord === null ? null : <ChangeMapView coords={coord} />}
                {/* {coord === null ? null : (
                    <Marker
                        position={coord}
                        eventHandlers={{
                            click: (e) => {
                                console.log('marker clicked', e);
                            },
                        }}
                    >
                        <Popup>You are here</Popup>
                    </Marker>
                )} */}
            </MapContainer>
        </Dialog>
    );
}
