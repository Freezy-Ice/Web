import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid } from '@mui/material';
import { flavorsState } from '../../Store/selectors';
import { FetchFlavorsList, RemoveFlavor } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import FlavorModal from '../Modals/FlavorModal';

export default function FlavorsList() {
    const flavors = useAppSelector(flavorsState);
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        FetchFlavorsList(dispatch);
    }, []);

    const handleRemoveFlavor = (flavorId: number) => {
        RemoveFlavor(dispatch, flavorId.toString());
    };

    return (
        <Grid>
            <List>
                {flavors?.data.map((flavor) => (
                    <Grid>
                        <ListItem>
                            <ListItemText primary={flavor.name} />
                            <Button onClick={() => handleRemoveFlavor(flavor.id)}>Usuń</Button>
                            <Button onClick={() => setOpen(true)}>Edytuj</Button>
                        </ListItem>
                        <FlavorModal open={open} close={setOpen} flavor={flavor} />
                    </Grid>
                ))}
            </List>
            <Button onClick={() => setOpen(true)}>Dodaj</Button>
        </Grid>
    );
}
