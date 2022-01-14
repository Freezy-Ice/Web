import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Grid, IconButton, Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

import RatingInterface, { RateInterface } from '../../Store/Interface/Profile/RatingInterface';
import { FetchUserRatings, RemoveUserRating } from '../../Store/Reducer/Profile/action';
import { useAppDispatch } from '../../Store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            padding: '2%',
        },
        button: {
            float: 'right',
        },
        rateFrame: {
            display: 'flex',
            justifyContent: 'right',
            textAlign: 'right',
        },
        rate: {
            paddingTop: '10%',
        },
        buttonBox: {
            textAlign: 'right',
        },
    }),
);

interface IDefaultProps {
    rating: RateInterface;
    currentPage: number;
}

export default function RatingComponent(props: IDefaultProps) {
    const { rating, currentPage } = props;
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const deleteRating = (): void => {
        RemoveUserRating(dispatch, rating?.id);
        FetchUserRatings(dispatch, currentPage);
    };

    console.log(rating);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid className={classes.buttonBox} item xs={12} md={2}>
                    <IconButton onClick={deleteRating} size="large">
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <p>{rating?.comment}</p>
            <div className={classes.rateFrame}>
                <Rating
                    name="read-only"
                    value={rating?.rating}
                    precision={0.5}
                    readOnly
                    className={classes.rate}
                />
            </div>
        </div>
    );
}
