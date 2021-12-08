import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Grid, Pagination } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import { useAppDispatch, useAppSelector } from '../../Store';
import { businessShopState } from '../../Store/selectors';
import { FetchBusinessShops } from '../../Store/Reducer/BusinessShop/action';
import CompanyShopComponent from '../../Components/CompanyAccount/CompanyAccountComponents/CompanyShopsComponent';
import { PaginationInterface } from '../../Store/Interface/Shop/PaginationInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 8,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        button: {
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center',
        },
        mapIcon: {
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'right',
        },
    }),
);

export default function CpmpanyAccount() {
    const shops = useAppSelector(businessShopState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (shops === null) {
            FetchBusinessShops(dispatch, 1);
        }
    }, [shops, dispatch]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (shops !== null) FetchBusinessShops(dispatch, value);
    };

    const paginationComponent = (pagination: PaginationInterface) => (
        <Stack spacing={2} alignItems="center">
            <Pagination
                color="primary"
                size="large"
                count={pagination.total / 5}
                page={pagination.currentPage}
                onChange={handleChange}
            />
        </Stack>
    );

    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);
    console.log(shops);

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
                <Grid item xs={12} className={classes.button}>
                    <Link to="/restaurantRegistration" style={{ textDecoration: 'none' }}>
                        <Button type="submit" fullWidth variant="contained">
                            Dodaj Lodziarnię
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        className={classes.mapIcon}
                        variant="contained"
                        onClick={() => setOpenMap(true)}
                    >
                        <MapTwoToneIcon fontSize="large" color="action" />
                    </Button>
                </Grid>
                {shops && shops !== null ? (
                    <div>
                        {paginationComponent(shops.paginationData)}
                        <Grid>
                            {shops !== null ? <CompanyShopComponent shops={shops} /> : null}
                        </Grid>
                        {paginationComponent(shops.paginationData)}
                    </div>
                ) : null}
            </Box>
        </Container>
    );
}
