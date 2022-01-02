import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import plLocale from 'date-fns/locale/pl';
import Modal from '@mui/material/Modal';
import { AppBar, Chip, CssBaseline, Dialog, Grid, Rating, TextField, Toolbar } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { flavorsState } from '../../Store/selectors';
import { FetchFlavorsList } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import { BusinessShopDetailsInterface } from '../../Store/Interface/BusinessShop/ShopInterface';

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
            border: '3px solid #81E2DC',
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
            borderBottom: '2px solid #81E2DC',
        },
        hourFrame: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            borderBottom: '2px solid #81E2DC',
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
    const [value, setValue] = React.useState<Date | null>(null);
    const [shoptName, setShopName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [openMap, setOpenMap] = React.useState(false);
    const [fileSelected, setFileSelected] = React.useState<File>();
    const dispatch = useAppDispatch();

    const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;

        if (!fileList) return;

        setFileSelected(fileList[0]);
    };

    const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (fileSelected) {
            const formData = new FormData();
            formData.append('image', fileSelected, fileSelected.name);
        }
    };

    React.useEffect(() => {
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
                    <Box component="form" noValidate sx={{ marginTop: 3 }}>
                        <Grid
                            item
                            xs={12}
                            sx={{ backgroundColor: 'primary.main' }}
                            className={classes.titleFrame}
                        >
                            <Grid textAlign="center" item xs={10}>
                                <TextField
                                    autoComplete="name"
                                    name="shopName"
                                    required
                                    fullWidth
                                    id="shopName"
                                    label="Nazwa Sklepu"
                                    value={shop.name}
                                    autoFocus
                                    onChange={(event) => setShopName(event.target.value as string)}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <div className={classes.rateFrame}>
                                    <Rating
                                        name="read-only"
                                        value={shop.rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                                <div className={classes.buttonBox}>
                                    <Button onClick={() => setOpenMap(true)}>
                                        <MapTwoToneIcon fontSize="large" color="action" />
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <div className={classes.hourFrame}>
                                <h3>{t('openingHours')}:</h3>
                                {shop.openingHours.map((oh) => (
                                    <div className={classes.hourBox}>
                                        <h5 className={classes.hours}>{t(oh.day)}:</h5>
                                        {oh.open ? (
                                            <p className={classes.hours}>
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDateFns}
                                                    locale={plLocale}
                                                >
                                                    <TimePicker
                                                        label="od"
                                                        value={oh.from}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                    />
                                                    <TimePicker
                                                        label="do"
                                                        value={oh.to}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                    />
                                                </LocalizationProvider>
                                            </p>
                                        ) : (
                                            <p className={classes.hours}>{t('closed')}</p>
                                        )}
                                    </div>
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
                                value={shop.description}
                                onChange={(event) => setDescription(event.target.value as string)}
                            />
                        </Grid>
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
}
