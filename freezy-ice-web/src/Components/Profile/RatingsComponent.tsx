import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Pagination, Paper, Stack } from '@mui/material';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import MapModal from '../Modals/MapModal';
import { useAppDispatch, useAppSelector } from '../../Store';
import { userFavouriteShopsState, userRatingsState } from '../../Store/selectors';
import { FetchFavouriteShops, FetchUserRatings } from '../../Store/Reducer/Profile/action';
import RatingComponent from './RatingComponent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        button: {
            float: 'right',
        },
        ratingComponent: {
            marginBottom: '2%',
            backgroundColor: 'red',
        },
    }),
);

export default function RatingsComponent() {
    const classes = useStyles();

    const userRatings = useAppSelector(userRatingsState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        FetchUserRatings(dispatch, 1);
    }, []);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (userRatings !== null) FetchUserRatings(dispatch, value);
    };

    return (
        <div>
            {userRatings && userRatings !== null ? (
                <div className={classes.root}>
                    <h1>Twoje oceny:</h1>
                    <div>
                        {userRatings?.data?.map((rating) => (
                            <Paper elevation={3} className={classes.ratingComponent}>
                                <RatingComponent
                                    rating={rating}
                                    currentPage={userRatings?.paginationData.currentPage}
                                />
                            </Paper>
                        ))}
                    </div>
                    <Stack spacing={2} alignItems="center">
                        <Pagination
                            color="primary"
                            size="large"
                            count={userRatings?.paginationData.total / 5}
                            page={userRatings?.paginationData.currentPage}
                            onChange={handleChange}
                        />
                    </Stack>
                </div>
            ) : null}
        </div>
    );
}
