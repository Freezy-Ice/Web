import { Paper, Rating } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import RoomIcon from '@mui/icons-material/Room';
import * as React from 'react';
import { stringDateFormat } from '../../../Helpers/date';
import { DateTimeFormatEnum } from '../../../Helpers/enums';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '3px solid #81E2DC',
            marginBottom: '5px',
            display: 'flex',
            maxHeight: '25vh',
        },
        picture: {
            flexGrow: 1,
            maxWidth: '30%',
        },
        deatils: {
            display: 'flex',
            flexGrow: 2,
            justifyContent: 'space-between',
            padding: '2%',
        },
        details_left: {
            textAlign: 'left',
        },
        details_right: {
            justifyContent: 'right',
            textAlign: 'right',
        },
        rate_frame: {
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
    shop: {
        id: number;
        name: string;
        description: string;
        updatedAt: string;
        address: string;
        openAt: string;
        closedAt: string;
        grade: number;
        picture: string;
    };
}

export default function HomeComponentDetails(props: IDefaultProps) {
    const classes = useStyles();
    const { shop } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.picture}>
                <img src={shop.picture} alt="" width="100%" height="100%" />
            </Paper>
            <Paper className={classes.deatils}>
                <div className={classes.details_left}>
                    <h2>{shop.name}</h2>
                    <h4>{shop.description}</h4>
                    <h5>
                        Ostatnia aktualizacja:
                        {stringDateFormat(shop.updatedAt, DateTimeFormatEnum.DateTime)}
                    </h5>
                </div>
                <div className={classes.details_right}>
                    <RoomIcon className={classes.details_right} />
                    <h5>{shop.address}</h5>
                    <h5>
                        Otwarte od: {stringDateFormat(shop.openAt, DateTimeFormatEnum.HoursMinutes)}{' '}
                        do: {stringDateFormat(shop.closedAt, DateTimeFormatEnum.HoursMinutes)}
                    </h5>
                    <div className={classes.rate_frame}>
                        <Rating
                            name="read-only"
                            value={shop.grade}
                            precision={0.5}
                            readOnly
                            className={classes.rate}
                        />
                        <h5>{shop.grade} </h5>
                    </div>
                </div>
            </Paper>
        </div>
    );
}
