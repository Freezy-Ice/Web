import { Button, Grid } from '@mui/material';
import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../Store';
import { GetUnacceptedShops } from '../../Store/Reducer/ShopAdmin/action';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: '10%',
            marginLeft: '10%',
        },
    }),
);

function AdminPanel() {
    const classes = useStyles();

    return (
        <Grid>
            <NavLink
                to="/acceptingShops"
                activeStyle={{ color: 'black' }}
                style={{ textDecoration: 'none' }}
            >
                <Button className={classes.root} variant="contained" size="large" color="primary">
                    Sklepy do zatwierdzenia
                </Button>
            </NavLink>
            <NavLink
                to="/flavorsList"
                activeStyle={{ color: 'black' }}
                style={{ textDecoration: 'none' }}
            >
                <Button className={classes.root} variant="contained" size="large" color="primary">
                    Smaki
                </Button>
            </NavLink>
            <NavLink
                to="/categoriesList"
                activeStyle={{ color: 'black' }}
                style={{ textDecoration: 'none' }}
            >
                <Button className={classes.root} variant="contained" size="large" color="primary">
                    Rodzaje
                </Button>
            </NavLink>
        </Grid>
    );
}

export default AdminPanel;
