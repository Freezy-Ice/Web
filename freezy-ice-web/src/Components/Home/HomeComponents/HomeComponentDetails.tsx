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
        detailsLeft: {
            textAlign: 'left',
        },
        detailsRight: {
            justifyContent: 'right',
            textAlign: 'right',
        },
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
        <div className={classes.root} id={shop.id.toString()}>
            <Paper className={classes.picture}>
                <img src={shop.picture} alt="" width="100%" height="100%" />
            </Paper>
            <Paper className={classes.deatils}>
                <div className={classes.detailsLeft}>
                    <h2>{shop.name}</h2>
                    <h4>{shop.description}</h4>
                    <h5>
                        Ostatnia aktualizacja:
                        {stringDateFormat(shop.updatedAt, DateTimeFormatEnum.DateTime)}
                    </h5>
                </div>
                <div className={classes.detailsRight}>
                    <RoomIcon className={classes.detailsRight} />
                    <h5>{shop.address}</h5>
                    <h5>
                        Otwarte od: {stringDateFormat(shop.openAt, DateTimeFormatEnum.HoursMinutes)}{' '}
                        do: {stringDateFormat(shop.closedAt, DateTimeFormatEnum.HoursMinutes)}
                    </h5>
                    <div className={classes.rateFrame}>
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
