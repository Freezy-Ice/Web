import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    AppBar,
    Autocomplete,
    CssBaseline,
    Dialog,
    Grid,
    Rating,
    TextField,
    Toolbar,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import RoomIcon from '@mui/icons-material/Room';
import { citiesState, flavorsState } from '../../Store/selectors';
import { FetchCitiesList, FetchFlavorsList } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import {
    BusinessShopDetailsInterface,
    CoordsInterface,
    OpeningHoursInterface,
} from '../../Store/Interface/BusinessShop/ShopInterface';
import OpeningTimes from '../../Helpers/openingTimes/OpeningTimes';
import { UpdateShop } from '../../Store/Reducer/BusinessShop/action';
import ChangeMapLocation from './ChangeMapLocation';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        shopDetailsFrame: {
            marginLeft: '10%',
            marginRight: '10%',
            display: 'flex',
            flexDirection: 'column',
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
            paddingBottom: '2%',
        },
        hourFrame: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
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
        body: {
            backgroundColor: 'black',
            color: 'black',
        },
    }),
);

interface IDefaultProps {
    open: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    shop: BusinessShopDetailsInterface;
}

export default function EditCompanyShopDetails(props: IDefaultProps) {
    const classes = useStyles();
    const { t } = useTranslation();
    const { open, close } = props;
    const { shop } = props;
    const [shopName, setShopName] = React.useState(shop.name);
    const [description, setDescription] = React.useState(shop.description);
    const [openMap, setOpenMap] = React.useState(false);
    const [coords, setCoords] = React.useState<CoordsInterface>(shop.coords);
    const [image, setImage] = React.useState<File>();
    const [imageUrl, setImageUrl] = React.useState(shop?.imageUrl);
    const [cityName, setCityName] = React.useState(shop.city);
    const [street, setStreet] = React.useState(shop.address);
    const cities = useAppSelector(citiesState);
    const dispatch = useAppDispatch();
    const [openingHours, setOpeningHours] = React.useState<Array<OpeningHoursInterface>>(
        shop.openingHours ?? [],
    );

    const handleEditCompanyShop = () => {
        if (image) {
            UpdateShop(dispatch, shop.id.toString(), {
                name: shopName,
                image,
                city: cityName,
                address: street,
                description,
                coords,
                openingHours,
            });
        }
    };

    const handleOpen = (openTime: OpeningHoursInterface) => {
        const array = openingHours;
        if (openingHours?.some((openingHour) => openingHour.day === openTime.day)) {
            const item = array.find((i) => i.day === openTime.day);
            if (item) {
                const index = array.indexOf(item);
                if (index >= 0) {
                    array?.splice(index, 1);
                    setOpeningHours(array);
                }
            }
        } else {
            array?.push(openTime);
            setOpeningHours(array);
        }
    };
    const handleCoords = (lat: number, lng: number) => {};

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    React.useEffect(() => {
        FetchCitiesList(dispatch);
        FetchFlavorsList(dispatch);
    }, []);

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <div>
            <Dialog fullScreen open={open} onClose={() => close(false)}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Button color="inherit" onClick={() => close(false)}>
                            X
                        </Button>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Box className={classes.box}>
                    <Typography component="h1" variant="h5">
                        Szczegóły lodziarni
                    </Typography>
                    <Box component="form" noValidate sx={{ marginTop: 5 }}>
                        <Grid item xs={12} className={classes.titleFrame}>
                            <Grid textAlign="center" item xs={10}>
                                <TextField
                                    autoComplete="name"
                                    name="shopName"
                                    required
                                    fullWidth
                                    id="shopName"
                                    label="Nazwa Sklepu"
                                    value={shopName}
                                    autoFocus
                                    onChange={(event: any) =>
                                        setShopName(event.target.value as string)
                                    }
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <div className={classes.buttonBox}>
                                    <RoomIcon onClick={() => setOpenMap(true)} />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.titleFrame}>
                            <Grid item xs={12} sm={6}>
                                {cities && (
                                    <Autocomplete
                                        sx={{ mb: '3px' }}
                                        disablePortal
                                        id="combo-box"
                                        options={cities!.data.map((c) => c.name)}
                                        value={cityName}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label={t('city')}
                                                onChange={(event: any) =>
                                                    setCityName(event.target.value as string)
                                                }
                                            />
                                        )}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="street"
                                    label="Ulica, numer"
                                    type="street"
                                    id="street"
                                    value={street}
                                    autoComplete="new-street"
                                    onChange={(event: any) =>
                                        setStreet(event.target.value as string)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.hourFrame}>
                                <h3>{t('openingHours')}:</h3>
                                {shop.openingHours.map((oh) => (
                                    <OpeningTimes openingHours={oh} setOpeningHours={handleOpen} />
                                ))}
                            </div>
                        </Grid>
                        <Grid item xs={12} className={classes.descriptionFrame}>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="Opis"
                                name="description"
                                autoComplete="description"
                                value={description}
                                onChange={(event: any) =>
                                    setDescription(event.target.value as string)
                                }
                            />
                        </Grid>
                        <Grid>
                            <input type="file" accept="image/*" onChange={handleImage} />
                            <img src={imageUrl} alt="" width="100%" height="100%" />
                        </Grid>
                        <Button fullWidth variant="contained" onClick={handleEditCompanyShop}>
                            Zapisz
                        </Button>
                    </Box>
                </Box>
                <ChangeMapLocation
                    open={openMap}
                    close={setOpenMap}
                    coords={coords}
                    setCoords={setCoords}
                />
            </Dialog>
        </div>
    );
}
