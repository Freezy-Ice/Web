import { Box, Button, Dialog, TextField } from '@mui/material';
import React, { SetStateAction, Dispatch } from 'react';
import { useAppDispatch } from '../../Store';
import CategoryInterface from '../../Store/Interface/Dictionaries/CategoryInterface';
import { CrateCategory, UpdateCategory } from '../../Store/Reducer/Dictionaries/action';

interface IDefaultProps {
    open: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    category: CategoryInterface | null;
}

export default function CategoryModal(props: IDefaultProps) {
    const { category } = props;
    const { open, close } = props;
    const [categoryName, setCategoryName] = React.useState(category?.name ?? '');
    const dispatch = useAppDispatch();

    const handleAddOrUpdateCategory = (categoryId: number | undefined) => {
        if (categoryId) {
            UpdateCategory(dispatch, categoryId.toString(), categoryName);
        } else {
            CrateCategory(dispatch, categoryName);
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
                        id="category"
                        label="Kategoria"
                        name="category"
                        autoComplete="category"
                        autoFocus
                        value={category?.name}
                        onChange={(event) => setCategoryName(event.target.value as string)}
                    />
                    <Button onClick={() => handleAddOrUpdateCategory(category?.id)}>Zapisz</Button>
                </Box>
            </Dialog>
        </div>
    );
}
