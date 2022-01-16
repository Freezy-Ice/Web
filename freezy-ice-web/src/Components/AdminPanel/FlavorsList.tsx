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
import { flavorsState } from '../../Store/selectors';
import { FetchFlavorsList, RemoveFlavor } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import FlavorModal from '../Modals/FlavorModal';
import FlavorInterface from '../../Store/Interface/Dictionaries/FlavorInterface';

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

export default function FlavorsList() {
    const classes = useStyles();
    const flavors = useAppSelector(flavorsState);
    const dispatch = useAppDispatch();
    const [open, setOpen] = React.useState(false);
    const [flavorModal, setFlavorModal] = React.useState<FlavorInterface | null>(null);

    React.useEffect(() => {
        FetchFlavorsList(dispatch);
    }, []);

    const handleAddEditModal = (flavor: FlavorInterface | null = null) => {
        setFlavorModal(flavor);
        setOpen(true);
    };

    const handleRemoveFlavor = (flavorId: number) => {
        RemoveFlavor(dispatch, flavorId.toString());
    };

    return (
        <Grid>
            <div className={classes.buttonAdd}>
                <Button variant="contained" size="large" onClick={() => handleAddEditModal()}>
                    Dodaj smak
                </Button>
            </div>
            <Grid className={classes.root}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Nazwa</TableCell>
                                <TableCell align="left">Usuń</TableCell>
                                <TableCell align="left">Edytuj</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {flavors?.data.map((flavor) => (
                                <TableRow
                                    key={flavor.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {flavor.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {flavor.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleRemoveFlavor(flavor.id)}
                                        >
                                            Usuń
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            onClick={() => handleAddEditModal(flavor)}
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
            {open && <FlavorModal open={open} close={setOpen} flavor={flavorModal} />}
        </Grid>
    );
}
