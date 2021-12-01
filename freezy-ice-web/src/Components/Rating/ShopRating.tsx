import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Chip, Grid, Paper, Rating, Stack } from '@mui/material';

import { ProductInterface } from '../../Store/Interface/Shop/Product/ProductInterface';
import { RateInterface } from '../../Store/Interface/Shop/Rate/RateInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '5px',
            borderRadius: '10px',
            flexWrap: 'wrap',
        },
        text: {
            margin: '10px',
        },
        createdAt: {
            margin: '10px',
            textAlign: 'right',
        },
        rateFrame: {
            textAlign: 'right',
            marginRight: '2%',
        },
    }),
);

interface IDefaultProps {
    rating: RateInterface;
}

export default function ShopRating(props: IDefaultProps) {
    const { rating } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper sx={{ p: '3', backgroundColor: 'gray' }}>
                <h2 className={classes.text}>{rating.username}</h2>
                <div className={classes.rateFrame}>
                    <Rating name="read-only" value={rating.rating} precision={0.5} readOnly />
                </div>
            </Paper>
            <Paper sx={{ p: '3' }}>
                <h4 className={classes.text}>{rating.comment}</h4>
                <h5 className={classes.createdAt}>{rating.createdAt}</h5>
            </Paper>
        </div>
    );
}
