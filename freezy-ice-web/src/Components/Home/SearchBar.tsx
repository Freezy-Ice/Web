import {
    Autocomplete,
    Button,
    Chip,
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
            display: 'flex',
        },
        filterBox: {
            display: 'flex',
            borderLeft: '2px solid #81E2DC',
            borderRight: '2px solid #81E2DC',
        },
        filterField: {
            borderRight: '2px solid #81E2DC',
        },
        textField: {
            width: '450px',
            marginBottom: '1%',
        },
        priceBox: {
            display: 'flex',
            marginBottom: '3px',
        },
        h3: {
            marginLeft: '2%',
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
        { id: 10, name: 'Włoskie' },
        { id: 20, name: 'Amerykańskie' },
        { id: 30, name: 'Gałkowe' },
        { id: 100, name: 'Włoskie' },
        { id: 200, name: 'Amerykańskie' },
        { id: 300, name: 'Gałkowe' },
        { id: 1000, name: 'Włoskie' },
        { id: 2000, name: 'Amerykańskie' },
    ]);
    const [flavors] = React.useState([
        { id: 1, name: 'Truskawka' },
        { id: 2, name: 'Malina' },
        { id: 3, name: 'Czekolada' },
        { id: 4, name: 'Wanilia' },
        { id: 5, name: 'Wiśnia' },
        { id: 6, name: 'Śmietankowy' },
        { id: 7, name: 'Truskawka' },
        { id: 8, name: 'Malina' },
        { id: 9, name: 'Czekolada' },
        { id: 10, name: 'Wanilia' },
        { id: 20, name: 'Wiśnia' },
        { id: 30, name: 'Śmietankowy' },
        { id: 100, name: 'Truskawka' },
        { id: 200, name: 'Malina' },
        { id: 300, name: 'Czekolada' },
        { id: 1000, name: 'Wanilia' },
        { id: 2000, name: 'Wiśnia' },
        { id: 3000, name: 'Śmietankowy' },
    ]);
    const [sortType, setSortType] = React.useState(0);
    const [categoryId, setCategoryId] = React.useState(0);
    const [tasteId, setTasteId] = React.useState(0);
    const [name, setName] = React.useState('');
    const [cityName, setCityName] = React.useState('');
    const [priceFrom, setPriceFrom] = React.useState(0);
    const [priceTo, setPriceTo] = React.useState(0);

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <Paper className={classes.root}>
            <div>
                <Autocomplete
                    sx={{ mb: '3px' }}
                    disablePortal
                    className={classes.textField}
                    id="combo-box"
                    options={cities}
                    renderInput={(params) => (
                        <TextField
                            className={classes.textField}
                            {...params}
                            label="Miasto"
                            onChange={(event) => setCityName(event.target.value as string)}
                        />
                    )}
                />
                <TextField
                    sx={{ mb: '3px' }}
                    className={classes.textField}
                    id="text-field-name"
                    label="Nazwa lodziarni"
                    variant="outlined"
                    maxRows={1}
                    onChange={(event) => setName(event.target.value as string)}
                />
                <Select
                    sx={{ mb: '7px' }}
                    fullWidth
                    id="sort"
                    value={sortType}
                    onChange={(event) => setSortType(event.target.value as number)}
                    autoWidth
                >
                    <MenuItem value={0} key={0}>
                        Alfabetycznie
                    </MenuItem>
                    <MenuItem value={1} key={1}>
                        Cena rosnąco
                    </MenuItem>
                    <MenuItem value={2} key={2}>
                        Cena malejąco
                    </MenuItem>
                    <MenuItem value={3} key={3}>
                        Ocena rosnąco
                    </MenuItem>
                    <MenuItem value={4} key={4}>
                        Ocena malejąco
                    </MenuItem>
                </Select>
                <div className={classes.priceBox}>
                    <TextField
                        onChange={(event) => setPriceFrom(Number(event.target.value) as number)}
                        sx={{ mr: '2px' }}
                        fullWidth
                        variant="outlined"
                        label="Od"
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">PLN</InputAdornment>,
                        }}
                    />
                    <TextField
                        onChange={(event) => setPriceTo(Number(event.target.value) as number)}
                        fullWidth
                        variant="outlined"
                        label="Do"
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">PLN</InputAdornment>,
                        }}
                    />
                </div>
                <Button variant="contained" size="large" fullWidth>
                    <h4>Szukaj</h4>
                </Button>
            </div>
            <div className={classes.filterBox}>
                <div className={classes.filterField}>
                    <h3 className={classes.h3}>Kategorie: </h3>
                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            color="primary"
                            sx={{ m: 1 }}
                            label={category.name}
                            onClick={() => setCategoryId(category.id)}
                            variant={category.id === categoryId ? 'outlined' : 'filled'}
                        />
                    ))}
                </div>
                <div>
                    <h3 className={classes.h3}>Smaki: </h3>
                    {flavors.map((taste) => (
                        <Chip
                            key={taste.id}
                            color="primary"
                            sx={{ m: 1 }}
                            label={taste.name}
                            onClick={() => setTasteId(taste.id)}
                            variant={taste.id === tasteId ? 'outlined' : 'filled'}
                        />
                    ))}
                </div>
            </div>
        </Paper>
    );
}
