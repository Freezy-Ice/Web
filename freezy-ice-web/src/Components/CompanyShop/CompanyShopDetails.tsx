import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import { NavLink } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Autocomplete, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../Store';
import { citiesState } from '../../Store/selectors';
import { FetchCitiesList } from '../../Store/Reducer/Dictionaries/action';
import '../../Helpers/translations/i18n';

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
        textField: {
            width: '500px',
            marginBottom: '1%',
        },
    }),
);

export default function CompanyShopDetails() {
    const classes = useStyles();
    const cities = useAppSelector(citiesState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        FetchCitiesList(dispatch);
    }, []);

    const { t } = useTranslation();
    const [shopName, setShopName] = React.useState('aaaaaaa');
    const [cityName, setCityName] = React.useState('kupa');
    const [address, setAddress] = React.useState('acposdfm');

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.box}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
                <Typography component="h1" variant="h5">
                    Zarejestruj się
                </Typography>
                <Box component="form" noValidate sx={{ marginTop: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="shopName"
                                required
                                fullWidth
                                id="shopName"
                                label="Nazwa Sklepu"
                                value={shopName}
                                autoFocus
                                onChange={(event) => setShopName(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {cities && (
                                <Autocomplete
                                    sx={{ mb: '3px' }}
                                    disablePortal
                                    className={classes.textField}
                                    id="combo-box"
                                    options={cities!.data.map((c) => c.name)}
                                    renderInput={(params) => (
                                        <TextField
                                            className={classes.textField}
                                            {...params}
                                            label={t('city')}
                                            onChange={(event) =>
                                                setCityName(event.target.value as string)
                                            }
                                        />
                                    )}
                                    value={cityName}
                                />
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="address"
                                label="Adres"
                                name="address"
                                autoComplete="address"
                                value={address}
                                onChange={(event) => setAddress(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Adres Email"
                                name="email"
                                autoComplete="email"
                                onChange={(event) => setEmail(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Hasło"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={(event) => setPassword(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                }
                                label="Konto firmowe"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained">
                        Zarejestruj
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
