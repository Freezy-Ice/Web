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
import { useAppDispatch, useAppSelector } from '../../Store';
import {
    FetchCategoriesList,
    FetchCitiesList,
    FetchFlavorsList,
} from '../../Store/Reducer/Dictionaries/action';
import { categoriesState, citiesState, flavorsState } from '../../Store/selectors';

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

    const cities = useAppSelector(citiesState);
    const categories = useAppSelector(categoriesState);
    const flavors = useAppSelector(flavorsState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (cities === null) {
            FetchCitiesList(dispatch);
        }
        if (categories === null) {
            FetchCategoriesList(dispatch);
        }
        if (flavors === null) {
            FetchFlavorsList(dispatch);
        }
    }, [cities, categories, flavors, dispatch]);

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
                {cities && (
                    <Autocomplete
                        sx={{ mb: '3px' }}
                        disablePortal
                        className={classes.textField}
                        id="combo-box"
                        options={cities!.data.map((c) => c.name)}
                        renderInput={(params) => (
                            <TextField
                                className={classes.textField}
                                {...params}
                                label="Miasto"
                                onChange={(event) => setCityName(event.target.value as string)}
                            />
                        )}
                    />
                )}
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
                    {categories?.data.map((category) => (
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
                    {flavors?.data.map((taste) => (
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
