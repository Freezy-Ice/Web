import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Autocomplete, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../Store';
import { AddShop } from '../../Store/Reducer/BusinessShop/action';
import { FetchCitiesList } from '../../Store/Reducer/Dictionaries/action';
import { citiesState } from '../../Store/selectors';
import { OpeningHoursInterface } from '../../Store/Interface/BusinessShop/ShopInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        buton: {
            marginTop: 3,
            marginBotom: 2,
        },
    }),
);

export default function Registration() {
    let openingHour: Array<OpeningHoursInterface>;
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [cityName, setCityName] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [descryption, setDescryption] = React.useState('');
    const dispatch = useAppDispatch();
    const cities = useAppSelector(citiesState);
    const { t } = useTranslation();

    // const handleAddShop = () => {
    //     AddShop(dispatch, shop.id.toString(), 1);
    // };
    React.useEffect(() => {
        if (cities === null) {
            FetchCitiesList(dispatch);
        }
    }, [cities, dispatch]);

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.box}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Zarejestruj swoją lodziarnię
                </Typography>
                <Box component="form" noValidate sx={{ marginTop: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Nazwa lodziarni"
                                name="name"
                                autoComplete="name"
                                onChange={(event) => setName(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {cities && (
                                <Autocomplete
                                    sx={{ mb: '3px' }}
                                    disablePortal
                                    id="combo-box"
                                    options={cities!.data.map((c) => c.name)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label={t('city')}
                                            onChange={(event) =>
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
                                label="Ulica"
                                type="street"
                                id="street"
                                autoComplete="new-street"
                                onChange={(event) => setStreet(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="time"
                                label="Otwarte od"
                                type="time"
                                defaultValue="07:00"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="time"
                                label="Otwarte do"
                                type="time"
                                defaultValue="18:00"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="descryption"
                                label="Krótki opis"
                                type="descryption"
                                id="descryption"
                                autoComplete="new-descryption"
                                onChange={(event) => setDescryption(event.target.value as string)}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained">
                        Zarejestuj
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
