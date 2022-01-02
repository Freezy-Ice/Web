import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

import FlavorInterface from '../../Store/Interface/Dictionaries/FlavorInterface';

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
    flavor: FlavorInterface;
}

export default function Flavor(props: IDefaultProps) {
    const classes = useStyles();
    const { t } = useTranslation();
    const { flavor } = props;
    const [tasteId, setTasteId] = React.useState(flavor.id);

    return (
        <div>
            <Chip
                key={flavor.id}
                color="primary"
                sx={{ m: 1 }}
                label={flavor.name}
                onClick={() => setTasteId(flavor.id)}
                variant={flavor.id === tasteId ? 'outlined' : 'filled'}
            />
        </div>
    );
}
