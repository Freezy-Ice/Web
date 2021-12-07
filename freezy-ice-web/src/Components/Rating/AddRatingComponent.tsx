import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Button, Paper, Rating, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../Store';
import { CreateRating } from '../../Store/Reducer/Shop/action';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '5px',
            borderRadius: '10px',
            flexWrap: 'wrap',
            marginTop: '2%',
        },
        rateBox: {
            marginTop: '2%',
            marginBottom: '2%',
        },
    }),
);

interface IDefaultProps {
    shopId: number;
}

export default function AddRating(props: IDefaultProps) {
    const { shopId } = props;
    const classes = useStyles();
    const [comment, setComment] = React.useState('');
    const [rate, setRate] = React.useState<number | null>(5);
    const dispatch = useAppDispatch();

    const addRating = (): void => {
        if (rate !== null) CreateRating(dispatch, shopId, { rating: rate, comment });
        else {
            toast.error('Wybierz ocenę!', {
                position: toast.POSITION.TOP_CENTER,
            });
        }
    };

    return (
        <div className={classes.root}>
            <Paper sx={{ p: '3', border: '2px solid #81E2DC' }}>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Komentarz"
                        multiline
                        maxRows={6}
                        minRows={6}
                        value={comment}
                        fullWidth
                        onChange={(event) => setComment(event.target.value as string)}
                        variant="standard"
                    />
                </div>
                <div className={classes.rateBox}>
                    <Rating
                        name="rate"
                        value={rate}
                        precision={0.5}
                        onChange={(event, newValue) => {
                            setRate(newValue);
                        }}
                    />
                </div>
                <Button onClick={addRating} variant="contained" size="large" fullWidth>
                    Dodaj
                </Button>
            </Paper>
        </div>
    );
}
