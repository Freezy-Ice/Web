import { Box, Button, Grid } from '@mui/material';
import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            height: '15vh',
        },
    }),
);

function AdminPanel() {
    const classes = useStyles();

    return (
        <Grid className={classes.root} container spacing={6}>
            <Grid item xs={12} md={12}>
                <NavLink
                    to="/acceptingShops"
                    activeStyle={{ color: 'black' }}
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                    >
                        <h2>Sklepy do zatwierdzenia</h2>
                    </Button>
                </NavLink>
            </Grid>
            <Grid item xs={12} md={6}>
                <NavLink
                    to="/flavorsList"
                    activeStyle={{ color: 'black' }}
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                    >
                        <h2>Smaki</h2>
                    </Button>
                </NavLink>
            </Grid>
            <Grid item xs={12} md={6}>
                <NavLink
                    to="/categoriesList"
                    activeStyle={{ color: 'black' }}
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        size="large"
                        color="primary"
                    >
                        <h2>Rodzaje</h2>
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
    );
}

export default AdminPanel;
