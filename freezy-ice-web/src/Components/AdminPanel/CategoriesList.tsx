import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid } from '@mui/material';
import { categoriesState } from '../../Store/selectors';
import { FetchCategoriesList, RemoveCategory } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import CategoryModal from '../Modals/CategoryModal';

export default function CategoriesList() {
    const categories = useAppSelector(categoriesState);
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        FetchCategoriesList(dispatch);
    }, []);

    const handleRemoveFlavor = (categoryId: number) => {
        RemoveCategory(dispatch, categoryId.toString());
    };

    return (
        <Grid>
            <List>
                {categories?.data.map((category) => (
                    <Grid>
                        <ListItem>
                            <ListItemText primary={category.name} />
                            <Button onClick={() => handleRemoveFlavor(category.id)}>Usuń</Button>
                            <Button onClick={() => setOpen(true)}>Edytuj</Button>
                        </ListItem>
                        <CategoryModal open={open} close={setOpen} category={category} />
                    </Grid>
                ))}
            </List>
            <Button onClick={() => setOpen(true)}>Dodaj</Button>
        </Grid>
    );
}
