import {
    Autocomplete,
    Button,
    Chip,
    Grid,
    InputAdornment,
    MenuItem,
    Paper,
    Select,
    TextField,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '1%',
            border: '2px solid #81E2DC',
        },
        searchBar: {
            display: 'flex',
        },
        category: {
            paddingTop: '2%',
        },
        filterField: {
            marginTop: '1%',
            paddingTop: '1%',
            borderTop: '2px solid #81E2DC',
        },
        textField: {
            border: '2px solid #81E2DC',
            borderRadius: theme.shape.borderRadius,
        },
    }),
);
export default function SearchBar() {
    const classes = useStyles();
    const [cities] = React.useState([
        { label: 'Legnica' },
        { label: 'Wrocław' },
        { label: 'Sosnowiec' },
    ]);
    const [categories] = React.useState([
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
        { id: 1, name: 'Włoskie' },
        { id: 2, name: 'Amerykańskie' },
        { id: 3, name: 'Gałkowe' },
    ]);
    const [sortType, setSortType] = React.useState(0);
    const [categoryId, setCategoryId] = React.useState(0);

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <Paper className={classes.root}>
            <div className={classes.searchBar}>
                <TextField
                    className={classes.textField}
                    id="text-field-name"
                    label="Nazwa lodziarni"
                    variant="outlined"
                    maxRows={1}
                    fullWidth
                />
                <Autocomplete
                    disablePortal
                    id="combo-box"
                    options={cities}
                    sx={{ width: 450 }}
                    renderInput={(params) => (
                        <TextField className={classes.textField} {...params} label="Miasto" />
                    )}
                />
            </div>
            <Select
                id="sort"
                value={sortType}
                onChange={(event) => setSortType(event.target.value as number)}
                autoWidth
            >
                <MenuItem value={0}>Alfabetycznie</MenuItem>
                <MenuItem value={1}>Cena rosnąco</MenuItem>
                <MenuItem value={2}>Cena malejąco</MenuItem>
                <MenuItem value={3}>Ocena rosnąco</MenuItem>
                <MenuItem value={4}>Ocena malejąco</MenuItem>
            </Select>
            <TextField
                variant="filled"
                label="Od"
                sx={{ width: 200 }}
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position="start">PLN</InputAdornment>,
                }}
            />
            <TextField
                variant="filled"
                label="Do"
                sx={{ width: 200 }}
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position="start">PLN</InputAdornment>,
                }}
            />
            <div className={classes.filterField}>
                {categories.map((category) => (
                    <Chip
                        className={classes.category}
                        label={category.name}
                        onClick={() => setCategoryId(category.id)}
                        variant={category.id === categoryId ? 'outlined' : 'filled'}
                    />
                ))}
            </div>
            <div className={classes.filterField}>
                {categories.map((category) => (
                    <Chip
                        className={classes.category}
                        label={category.name}
                        onClick={() => setCategoryId(category.id)}
                        variant={category.id === categoryId ? 'outlined' : 'filled'}
                    />
                ))}
            </div>
            <Grid item xs={4}>
                <Button variant="contained" size="large" fullWidth>
                    <h4>Szukaj</h4>
                </Button>
            </Grid>
        </Paper>
    );
}
