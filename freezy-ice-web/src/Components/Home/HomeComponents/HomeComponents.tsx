import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import HomeComponentDetails from './HomeComponentDetails';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginLeft: '5%',
            marginRight: '5%',
        },
    }),
);

interface IDefaultProps {
    shops: Array<{
        id: number;
        name: string;
        description: string;
        updatedAt: string;
        address: string;
        openAt: string;
        closedAt: string;
        grade: number;
        picture: string;
    }>;
}

export default function HomeComponents(props: IDefaultProps) {
    const { shops } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {shops.map((shop) => (
                <HomeComponentDetails shop={shop} />
            ))}
        </div>
    );
}
