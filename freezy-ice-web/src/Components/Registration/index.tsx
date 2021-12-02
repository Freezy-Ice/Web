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
import { FormControlLabel } from '@mui/material';

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
    const classes = useStyles();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Imię"
                                autoFocus
                                onChange={(event) => setFirstName(event.target.value as string)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Nazwisko"
                                name="lastName"
                                autoComplete="family-name"
                                onChange={(event) => setLastName(event.target.value as string)}
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
                    <Grid>
                        <Grid item pt={2}>
                            <NavLink
                                to="/login"
                                activeStyle={{ color: '#81E2DC' }}
                                style={{ color: '#81E2DC', textDecoration: 'none' }}
                            >
                                Masz już konto? Zaloguj się
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}
