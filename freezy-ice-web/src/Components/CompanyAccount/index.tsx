import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Grid, Paper, Rating } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Link, NavLink } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import RoomIcon from '@mui/icons-material/Room';
import { stringDateFormat } from '../../Helpers/date';
import { DateTimeFormatEnum } from '../../Helpers/enums';
import MapModal from '../Modals/MapModal';
import HomeComponentDetails from '../Home/HomeComponents/HomeComponentDetails';
import HomeComponents from '../Home/HomeComponents/HomeComponents';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            marginTop: 20,
        },
        root: {
            border: '3px solid #81E2DC',
            marginBottom: '5px',
            display: 'flex',
            maxHeight: '25vh',
        },
        picture: {
            flexGrow: 1,
            maxWidth: '30%',
        },
        deatils: {
            display: 'flex',
            flexGrow: 2,
            justifyContent: 'space-between',
            padding: '2%',
        },
        detailsLeft: {
            textAlign: 'left',
        },
        detailsRight: {
            justifyContent: 'right',
            textAlign: 'right',
        },
        rateFrame: {
            display: 'flex',
            justifyContent: 'right',
            textAlign: 'right',
        },
        rate: {
            paddingTop: '10%',
        },
    }),
);

interface IDefaultProps {
    companyName: string;
}

export default function CpmpanyAccount(props: IDefaultProps) {
    const classes = useStyles();
    const { companyName } = props;
    const [openMap, setOpenMap] = React.useState(false);

    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box className={classes.box}>
                <Grid>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                        <div>
                            <h1>Lody naturalne</h1>
                        </div>
                    </Stack>
                </Grid>
                <Link
                    className={classes.button}
                    to="/restaurantRegistration"
                    style={{ textDecoration: 'none' }}
                >
                    <Button type="submit" fullWidth variant="contained">
                        Dodaj Lodziarnię
                    </Button>
                </Link>
                <div />
            </Box>
        </Container>
    );
}
