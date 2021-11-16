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
import { Link, NavLink } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            marginTop: 3,
            marginBotom: 2,
        },
    }),
);

export default function Login() {
    const classes = useStyles();
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className={classes.box}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Logowanie
                </Typography>
                <Box component="form" noValidate sx={{ marginTop: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adres Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(event) => setLogin(event.target.value as string)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(event) => setPassword(event.target.value as string)}
                    />
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.button}
                        >
                            Zaloguj
                        </Button>
                    </Link>
                    <Grid container>
                        <Grid item xs>
                            <NavLink to="/" activeStyle={{ color: '#81E2DC' }}>
                                Zapomniałeś hasła?
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/" activeStyle={{ color: '#81E2DC' }}>
                                Rejestracja
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}