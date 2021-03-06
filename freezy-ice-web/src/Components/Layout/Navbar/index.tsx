import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { AccountCircle } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { userState } from '../../../Store/selectors';
import { useAppSelector } from '../../../Store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: 2,
        },
        title: {
            flexGrow: 1,
        },
        button: {
            backgroundColor: '#e557f7',
        },
        button_home: {
            textDecoration: 'none',
        },
    }),
);

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openProfile = Boolean(anchorEl);
    const userInfo = useAppSelector(userState);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        setAnchorEl(null);
    };

    const handleMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography style={{ width: '10%' }} variant="h6" className={classes.title}>
                        <NavLink
                            to="/"
                            activeStyle={{ color: 'black' }}
                            style={{ textDecoration: 'none' }}
                        >
                            <h3 color="black">Freezy-Ice</h3>
                        </NavLink>
                    </Typography>
                    {userInfo !== null ? (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenuProfile}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openProfile}
                                onClose={handleClose}
                            >
                                <NavLink
                                    to="/profile"
                                    activeStyle={{ color: 'black' }}
                                    style={{ color: 'black', textDecoration: 'none' }}
                                >
                                    <MenuItem onClick={handleClose}>Profil</MenuItem>
                                </NavLink>
                                {userInfo?.data.adminAccount && (
                                    <NavLink
                                        to="/adminPanel"
                                        activeStyle={{ color: 'black' }}
                                        style={{ color: 'black', textDecoration: 'none' }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            Panel adminstartora
                                        </MenuItem>
                                    </NavLink>
                                )}
                                <MenuItem onClick={handleLogout}>Wyloguj</MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div>
                            <Link to="/Login" style={{ textDecoration: 'none' }}>
                                <Button className={classes.button} variant="contained">
                                    Zaloguj
                                </Button>
                            </Link>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}
