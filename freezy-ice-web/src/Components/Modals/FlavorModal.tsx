import { Box, Button, Dialog, TextField } from '@mui/material';
import React, { SetStateAction, Dispatch } from 'react';
import { useAppDispatch } from '../../Store';
import FlavorInterface from '../../Store/Interface/Dictionaries/FlavorInterface';
import { CrateFlavor, UpdateFlavor } from '../../Store/Reducer/Dictionaries/action';

interface IDefaultProps {
    open: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    flavor: FlavorInterface | null;
}

export default function FlavorModal(props: IDefaultProps) {
    const { flavor } = props;
    const { open, close } = props;
    const [flavorName, setFlavorName] = React.useState(flavor?.name ?? '');
    const dispatch = useAppDispatch();

    const handleAddOrUpdateFlavor = (flavorId: number | undefined) => {
        if (flavorId) {
            UpdateFlavor(dispatch, flavorId.toString(), flavorName);
        } else {
            CrateFlavor(dispatch, flavorName);
        }
    };

    return (
        <div>
            <Dialog open={open} onClose={() => close(false)}>
                <Box component="form" noValidate sx={{ marginTop: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="flavor"
                        label="Smak"
                        name="flavor"
                        autoComplete="flavor"
                        autoFocus
                        value={flavor?.name}
                        onChange={(event) => setFlavorName(event.target.value as string)}
                    />
                    <Button onClick={() => handleAddOrUpdateFlavor(flavor?.id)}>Zapisz</Button>
                </Box>
            </Dialog>
        </div>
    );
}
