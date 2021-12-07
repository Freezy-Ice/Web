import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Pagination, Stack } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import MapModal from '../Modals/MapModal';
import { useAppDispatch, useAppSelector } from '../../Store';
import { userFavouriteShopsState } from '../../Store/selectors';
import { FetchFavouriteShops } from '../../Store/Reducer/Profile/action';
import HomeComponentDetails from '../Home/HomeComponents/HomeComponentDetails';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        buttonBox: {
            marginBottom: '1%',
        },
        button: {
            float: 'right',
        },
    }),
);

export default function FavouriteComponent() {
    const classes = useStyles();
    const [openMap, setOpenMap] = React.useState(false);

    const shops = useAppSelector(userFavouriteShopsState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (shops === null) {
            FetchFavouriteShops(dispatch, 1);
        }
    }, [shops]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (shops !== null) FetchFavouriteShops(dispatch, value);
    };

    return (
        <div>
            {shops && shops !== null ? (
                <div className={classes.root}>
                    <h1>Polubione lodziarnie</h1>
                    <div className={classes.buttonBox}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            onClick={() => setOpenMap(true)}
                        >
                            <MapTwoToneIcon fontSize="large" color="action" />
                        </Button>
                    </div>
                    <div>
                        {shops?.data?.map((shop) => (
                            <HomeComponentDetails shop={shop} />
                        ))}
                    </div>
                    <Stack spacing={2} alignItems="center">
                        <Pagination
                            color="primary"
                            size="large"
                            count={shops!.paginationData.total / 5}
                            page={shops!.paginationData.currentPage}
                            onChange={handleChange}
                        />
                    </Stack>
                    <MapModal open={openMap} close={setOpenMap} shops={shops?.data} />
                </div>
            ) : null}
        </div>
    );
}
