import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import * as React from 'react';
import { LocalizationProvider, TimePicker } from '@mui/lab';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import plLocale from 'date-fns/locale/pl';
import { useTranslation } from 'react-i18next';
import { OpeningHoursInterface } from '../../Store/Interface/BusinessShop/ShopInterface';
import OpeningHoursModels from '../../Store/Service/BusinessShop/Models/OpeningHoursModel';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hourBox: {
            display: 'flex',
            flexDirection: 'row',
        },
        hours: {
            margin: '5px',
        },
    }),
);

interface IDefaultProps {
    openingHours: OpeningHoursInterface;
    setOpeningHours: (openTime: OpeningHoursInterface) => void;
}

export default function OpeningTimes(props: IDefaultProps) {
    const classes = useStyles();
    const { t } = useTranslation();
    const { openingHours, setOpeningHours } = props;
    const [from, setFrom] = React.useState(openingHours.from);
    const [to, setTo] = React.useState(openingHours.to);
    const [open, setOpen] = React.useState(openingHours.open);
    const [day] = React.useState(openingHours.day);
    console.log('from to', from, to);

    const handleOpen = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('open');
        setOpen(event.target.checked);
    };

    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <div className={classes.hourBox}>
            <h5 className={classes.hours}>{t(day)}:</h5>
            <p className={classes.hours}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={plLocale}>
                    <TimePicker
                        label="od"
                        value={from}
                        disabled={open === false}
                        onChange={(newValue) => {
                            setFrom(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="do"
                        value={to}
                        disabled={open === false}
                        onChange={(newValue) => {
                            setTo(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={open}
                            onChange={handleOpen}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label="otwarte"
                />
                <Button onClick={() => setOpeningHours({ day, from, to, open })}>
                    Zapisz godzinę
                </Button>
            </p>
        </div>
    );
}
