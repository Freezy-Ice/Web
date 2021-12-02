import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../Store';
import { userProfileState } from '../../Store/selectors';
import { FetchUserProfile } from '../../Store/Reducer/Profile/action';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '2px solid #81E2DC',
            borderRadius: '10px',
        },
        dataFrame: {
            borderLeft: '2px solid #81E2DC',
            paddingLeft: '5%',
            paddingTop: '5%',
        },
        nameBox: {
            paddingBottom: '5%',
        },
    }),
);

function ProfileComponent() {
    const classes = useStyles();
    const { t } = useTranslation();

    const userProfile = useAppSelector(userProfileState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        FetchUserProfile(dispatch);
    }, []);

    console.log(userProfile);

    return (
        <Grid className={classes.root} container direction="row">
            <Grid xs={12} md={4} item sx={{ bgcolor: 'primary.main', textAlign: 'center' }}>
                <AccountCircle style={{ color: '#65b5b0' }} sx={{ fontSize: 390 }} />
            </Grid>
            <Grid className={classes.dataFrame} xs={12} md={8} item>
                <Grid className={classes.nameBox} item xs={12} md={12}>
                    <h1>Imię: {userProfile?.data.name}</h1>
                </Grid>
                <Grid item xs={12} md={12}>
                    <h1>Email: {userProfile?.data.email}</h1>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProfileComponent;
