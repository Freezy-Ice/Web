import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import * as React from 'react';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import plLocale from 'date-fns/locale/pl';
import { useTranslation } from 'react-i18next';
import { LocalizationProvider, TimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { OpeningHoursInterface } from '../../Store/Interface/BusinessShop/ShopInterface';
import { DateTimeFormatEnum } from '../enums';
import { stringDateFormat } from '../date';

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

    const handleOpen = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                        onChange={(newValue: any) => {
                            setFrom(newValue);
                        }}
                        renderInput={(params: any) => <TextField {...params} />}
                    />
                    <TimePicker
                        label="do"
                        value={to}
                        disabled={open === false}
                        onChange={(newValue: any) => {
                            setTo(newValue);
                        }}
                        renderInput={(params: any) => <TextField {...params} />}
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
                <Button variant="outlined" onClick={() => setOpeningHours({ day, from, to, open })}>
                    Zapisz godzinę
                </Button>
            </p>
        </div>
    );
}
