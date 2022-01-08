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
import FlavorModel from '../../Store/Service/Product/Model/FlavorModel';

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

export default function AddEditProduct(props: IDefaultProps) {
    const classes = useStyles();
    const { t } = useTranslation();
    const categories = useAppSelector(categoriesState);
    const flavors = useAppSelector(flavorsState);
    const { product } = props;
    const { open, close } = props;
    const [productName, setProductName] = React.useState(product?.name ?? '');
    const [categoryId, setCategoryId] = React.useState(0);
    const [kcal, setKcal] = React.useState(product?.kcal ?? 0);
    const [description, setDescription] = React.useState(product?.description ?? '');
    const [price, setPrice] = React.useState(product?.price ?? 0);
    const [tasteIds, setTasteIds] = React.useState<Array<FlavorModel>>([]);
    const [image, setImage] = React.useState<File>();
    const [imageUrl, setImageUrl] = React.useState(product?.imageUrl ?? '');
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id?: string }>();

    const handleGetProduct = () => {
        if (id && image && tasteIds) {
            if (product) {
                UpdateProduct(dispatch, id, product.id.toString(), {
                    name: productName,
                    image,
                    description,
                    category: categoryId,
                    flavors: tasteIds,
                    price: price * 1000,
                    kcal,
                });
            } else {
                AddProduct(dispatch, id, {
                    name: productName,
                    image,
                    description,
                    category: categoryId,
                    flavors: tasteIds,
                    price: price * 1000,
                    kcal,
                });
            }
        }
    };

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleFlavorsArrayChange = (flavorId: number) => {
        const flavor: FlavorModel = { id: flavorId };
        const array = tasteIds;
        if (tasteIds?.some((taste) => taste.id === flavorId)) {
            const index = array?.indexOf(flavor);
            if (index && index >= 0) {
                array?.splice(index, 1);
                setTasteIds(array);
            }
        } else {
            array?.push(flavor);
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
                                    onChange={(event: any) =>
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
                                        value={product?.category.name}
                                        renderInput={(params) => (
                                            <TextField
                                                className={classes.textField}
                                                {...params}
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
                                    id="price"
                                    required
                                    label="cena"
                                    type="number"
                                    value={price}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event: any) =>
                                        setPrice(event.target.value as number)
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="kcal"
                                    required
                                    label="kalorie"
                                    autoComplete="kcal"
                                    type="number"
                                    value={kcal}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event: any) => setKcal(event.target.value as number)}
                                />
                            </Grid>
                            <Grid className={classes.filterField}>
                                <h3 className={classes.h3}>{t('tastes')}: </h3>
                                {flavors?.data.map((flavor) => (
                                    <Chip
                                        key={flavor.id}
                                        color="primary"
                                        sx={{ m: 1 }}
                                        label={flavor.name}
                                        variant={
                                            tasteIds?.some((taste) => taste.id === flavor.id)
                                                ? 'outlined'
                                                : 'filled'
                                        }
                                        onClick={() => handleFlavorsArrayChange(flavor.id)}
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
                                    onChange={(event: any) =>
                                        setDescription(event.target.value as string)
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid>
                            <input type="file" accept="image/*" onChange={handleImage} />
                            <img src={imageUrl} alt="" width="100%" height="100%" />
                        </Grid>
                        <Button fullWidth variant="contained" onClick={() => handleGetProduct()}>
                            Zapisz
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
}
