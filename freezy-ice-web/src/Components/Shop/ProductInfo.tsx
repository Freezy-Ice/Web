import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Chip, Grid, Paper, Stack } from '@mui/material';

import { ProductInterface } from '../../Store/Interface/Shop/Product/ProductInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '5px',
            borderRadius: '10px',
            flexWrap: 'wrap',
        },
        shopDetailsFrame: {
            marginLeft: '20%',
            marginRight: '20%',
            display: 'flex',
            flexDirection: 'column',
            border: '3px solid #81E2DC',
            maxWidth: '60vw',
            marginBottom: '5%',
        },
        pictureBox: {
            maxHeight: '20vh',
            overflow: 'hidden',
        },
        text: {
            margin: '0px',
            textAlign: 'center',
        },
        priceBox: {
            display: 'flex',
            flexDirection: 'row',
        },
        contentBox: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
    }),
);

interface IDefaultProps {
    product: ProductInterface;
}

export default function ProductInfo(props: IDefaultProps) {
    const { product } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper sx={{ m: '0', backgroundColor: 'primary.main' }}>
                <h3 className={classes.text}>{product.name}</h3>
            </Paper>
            <div className={classes.pictureBox}>
                <img src={product.imageUrl} alt="" width="100%" height="100%" />
            </div>
            <div className={classes.contentBox}>
                <Grid container>
                    <Grid xs={6} alignItems="center" direction="row">
                        <h5>Cena:</h5>
                        <p>{product.price / 100}zł</p>
                    </Grid>
                    <Grid xs={6} textAlign="right" alignItems="center" direction="row" spacing={1}>
                        <h5>Kalorie:</h5>
                        <p>{product.kcal}kcal</p>
                    </Grid>
                </Grid>
                <Stack flexWrap="wrap" alignItems="center" direction="row" spacing={1}>
                    <h5>Smaki:</h5>
                    {product.flavors.map((f) => (
                        <Chip size="small" variant="outlined" label={f.name} />
                    ))}
                </Stack>
                <Stack flexWrap="wrap" alignItems="center" direction="row" spacing={1}>
                    <h5>Rodzaj:</h5>
                    <p>{product.category.name}</p>
                </Stack>
                <Stack flexWrap="wrap" alignItems="center" direction="row" spacing={1}>
                    <h5>Opis:</h5>
                    <p>{product.description}</p>
                </Stack>
            </div>
        </div>
    );
}