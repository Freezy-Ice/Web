import * as React from 'react';
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { categoriesState } from '../../Store/selectors';
import { FetchCategoriesList, RemoveCategory } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import CategoryModal from '../Modals/CategoryModal';
import CategoryInterface from '../../Store/Interface/Dictionaries/CategoryInterface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        buttonAdd: {
            marginBottom: '2%',
            textAlign: 'right',
        },
    }),
);

export default function CategoriesList() {
    const classes = useStyles();
    const categories = useAppSelector(categoriesState);
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);
    const [categoryModal, setCatrgoryModal] = React.useState<CategoryInterface | null>(null);

    React.useEffect(() => {
        FetchCategoriesList(dispatch);
    }, []);

    const handleAddEditModal = (category: CategoryInterface | null = null) => {
        setCatrgoryModal(category);
        setOpen(true);
    };

    const handleRemoveFlavor = (categoryId: number) => {
        RemoveCategory(dispatch, categoryId.toString());
    };

    return (
        <Grid>
            <div className={classes.buttonAdd}>
                <Button variant="contained" size="large" onClick={() => handleAddEditModal()}>
                    Dodaj kategorię
                </Button>
            </div>
            <Grid className={classes.root}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Nazwa</TableCell>
                                <TableCell align="left">Edytuj</TableCell>
                                <TableCell align="left">Usuń</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories?.data.map((category) => (
                                <TableRow
                                    key={category.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {category.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {category.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            color="error"
                                            variant="outlined"
                                            onClick={() => handleRemoveFlavor(category.id)}
                                        >
                                            Usuń
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleAddEditModal(category)}
                                        >
                                            Edytuj
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            {open && <CategoryModal open={open} close={setOpen} category={categoryModal} />}
        </Grid>
    );
}
