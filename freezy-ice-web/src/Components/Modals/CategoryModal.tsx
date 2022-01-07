import { CloseOutlined } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { Box, Button, Dialog, IconButton, TextField } from '@mui/material';
import React, { SetStateAction, Dispatch } from 'react';
import { useAppDispatch } from '../../Store';
import CategoryInterface from '../../Store/Interface/Dictionaries/CategoryInterface';
import { CrateCategory, UpdateCategory } from '../../Store/Reducer/Dictionaries/action';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rateFrame: {
            display: 'flex',
            justifyContent: 'right',
            textAlign: 'right',
        },
        rate: {
            paddingTop: '10%',
        },
    }),
);

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
            <Dialog
                fullWidth
                maxWidth="md"
                sx={{ backgroundColor: 'transparent' }}
                open={open}
                onClose={() => close(false)}
            >
                <IconButton
                    sx={{ width: '30px', marginLeft: '2%' }}
                    edge="start"
                    color="inherit"
                    onClick={() => close(false)}
                    aria-label="close"
                >
                    <CloseOutlined />
                </IconButton>
                <Box component="form" noValidate sx={{ marginTop: 1, padding: '2%' }}>
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
                    <Button
                        variant="outlined"
                        onClick={() => handleAddOrUpdateCategory(category?.id)}
                    >
                        Zapisz
                    </Button>
                </Box>
            </Dialog>
        </div>
    );
}
