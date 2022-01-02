import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    AppBar,
    Autocomplete,
    Chip,
    CssBaseline,
    Dialog,
    Grid,
    TextField,
    Toolbar,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { categoriesState, flavorsState } from '../../Store/selectors';
import { FetchCategoriesList, FetchFlavorsList } from '../../Store/Reducer/Dictionaries/action';
import { useAppDispatch, useAppSelector } from '../../Store';
import { ProductInterface } from '../../Store/Interface/BusinessShop/Product/CompanyProductInterface';
import { AddProduct, UpdateProduct } from '../../Store/Reducer/Product/action';
import ProductModel from '../../Store/Service/Product/Model/ProductModel';
import Flavor from '../CompanyShop/Flavor';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        buton: {
            marginTop: 3,
            marginBotom: 2,
        },
        textField: {
            width: '500px',
            marginBottom: '1%',
        },
        modal: {
            backgroundColor: 'white',
            border: '2px solid #000',
        },
        filterField: {
            borderRight: '2px solid #81E2DC',
        },
        h3: {
            marginLeft: '2%',
        },
    }),
);

interface IDefaultProps {
    open: boolean;
    close: Dispatch<SetStateAction<boolean>>;
    product: ProductInterface | null;
}

export default function AddAndUpdateProduct(props: IDefaultProps) {
    const classes = useStyles();
    const { t } = useTranslation();
    const { product } = props;
    const { open, close } = props;
    const [productName, setProductName] = React.useState(product?.name ?? '');
    const [categoryId, setCategoryId] = React.useState(0);
    const [kcal, setKcal] = React.useState(product?.kcal ?? 0);
    const [description, setDescription] = React.useState(product?.description ?? '');
    const [price, setPrice] = React.useState(product?.price ?? 0);
    const categories = useAppSelector(categoriesState);
    const flavors = useAppSelector(flavorsState);
    const [tasteIds, setTasteIds] = React.useState<Array<number>>([]);
    const [image, setImage] = React.useState<File>();
    const [imageUrl, setImageUrl] = React.useState(product?.imageUrl ?? '');
    const dispatch = useAppDispatch();
    const { shopId } = useParams<{ shopId?: string }>();

    const handleGetPRoduct = () => {
        if (shopId && image && tasteIds) {
            if (product) {
                console.log('edycja');

                UpdateProduct(
                    dispatch,
                    shopId,
                    product.id.toString(),
                    new ProductModel(
                        productName,
                        image,
                        description,
                        categoryId,
                        tasteIds,
                        price,
                        kcal,
                    ),
                );
            } else {
                console.log('dodawanie');
                AddProduct(
                    dispatch,
                    shopId,
                    new ProductModel(
                        productName,
                        image,
                        description,
                        categoryId,
                        tasteIds,
                        price,
                        kcal,
                    ),
                );
            }
        }
    };

    const handleKcal = (kc: string) => {
        setKcal(Number(kc));
        console.log(kcal);
    };

    const handlePrice = (pr: string) => {
        setPrice(Number(pr));
        console.log(price);
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleFlavorsArrayChange = (flavorId: number) => {
        console.log('aaa', flavorId, tasteIds);
        const array = tasteIds;
        if (tasteIds?.some((id) => id === flavorId)) {
            const index = array?.indexOf(flavorId);
            if (index && index >= 0) {
                array?.splice(index, 1);
                console.log('remove', tasteIds);
                setTasteIds(array);
            }
        } else {
            array?.push(flavorId);
            setTasteIds(array);
        }
    };

    React.useEffect(() => {
        FetchCategoriesList(dispatch);

        FetchFlavorsList(dispatch);
    }, []);

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <div>
            <Dialog fullScreen open={open} onClose={() => close(false)}>
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Button color="inherit" onClick={() => close(false)}>
                            X
                        </Button>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <Box className={classes.box}>
                    <Typography component="h1" variant="h5">
                        Szczegóły lodziarni
                    </Typography>
                    <Box component="form" noValidate sx={{ marginTop: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="name"
                                    name="productName"
                                    required
                                    fullWidth
                                    id="productName"
                                    label="Nazwa Produktu"
                                    value={productName}
                                    autoFocus
                                    onChange={(event) =>
                                        setProductName(event.target.value as string)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {categories && (
                                    <Autocomplete
                                        sx={{ mb: '3px' }}
                                        disablePortal
                                        className={classes.textField}
                                        id="combo-box"
                                        options={categories!.data.map((c) => c.name)}
                                        renderInput={(params) => (
                                            <TextField
                                                className={classes.textField}
                                                {...params}
                                                value={product?.category}
                                                label={t('categories')}
                                                onChange={() =>
                                                    setCategoryId(product?.category.id ?? 0)
                                                }
                                            />
                                        )}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="number"
                                    required
                                    fullWidth
                                    id="price"
                                    label="Cena"
                                    name="price"
                                    autoComplete="price"
                                    value={price}
                                    onChange={(event) => handlePrice(event.target.value as string)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="number"
                                    required
                                    fullWidth
                                    id="kcal"
                                    label="Kalorie"
                                    name="kcal"
                                    autoComplete="kcal"
                                    value={kcal}
                                    onChange={(event) => handleKcal(event.target.value as string)}
                                />
                            </Grid>
                            <Grid className={classes.filterField}>
                                <h3 className={classes.h3}>{t('tastes')}: </h3>
                                {flavors?.data.map((taste) => (
                                    <Chip
                                        key={taste.id}
                                        color="primary"
                                        sx={{ m: 1 }}
                                        label={taste.name}
                                        variant={
                                            tasteIds?.some((id) => id === taste.id)
                                                ? 'outlined'
                                                : 'filled'
                                        }
                                        onClick={() => handleFlavorsArrayChange(taste.id)}
                                    />
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Opis"
                                    name="description"
                                    autoComplete="description"
                                    value={description}
                                    onChange={(event) =>
                                        setDescription(event.target.value as string)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid>
                            <input type="file" accept="image/*" onChange={handleImage} />
                            {imageUrl}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={handleGetPRoduct}
                        >
                            Zapisz
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
}
