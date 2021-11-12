// @flow
import { Backdrop, CircularProgress, Divider, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

import { useAppSelector } from '../../../Store';
import { commonState } from '../../../Store/selectors';

type Props = {
    open: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'block',
        alignItems: 'center',
        textAlign: 'center',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function Loading(props: Props) {
    const { open } = props;

    const classes = useStyles();
    const state = useAppSelector(commonState);

    return (
        <Backdrop
            className={classes.backdrop}
            open={open || state.loading || state.saving || state.processing}
        >
            <div className={classes.root}>
                {state.loading && (
                    <Typography variant="h1" component="h2" gutterBottom>
                        Ładowanie ...
                    </Typography>
                )}
                {state.saving && (
                    <Typography variant="h1" component="h2" gutterBottom>
                        Zapisywanie ...
                    </Typography>
                )}
                {!state.loading && state.processing && (
                    <Typography variant="h1" component="h2" gutterBottom>
                        Przetwarzanie ...
                    </Typography>
                )}
                <Divider />
                <Typography variant="h2" gutterBottom>
                    <CircularProgress color="inherit" />
                </Typography>
            </div>
        </Backdrop>
    );
}
