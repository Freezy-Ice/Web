import {
  AppBar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { AccountCircle } from '@mui/icons-material';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      backgroundColor: '#809ff2',
    },
    button_home: {
      textDecoration: 'none',
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );
  const openProfile = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    setAnchorEl(null);
  };

  const handleMenuProfile = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
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
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              color="inherit"
              href="/"
              className={classes.button_home}
              underline="none"
            >
              <h3>Freezy-Ice</h3>
            </Link>
          </Typography>
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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Wyloguj</MenuItem>
            </Menu>
          </div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            href="/"
          >
            Zaloguj
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
