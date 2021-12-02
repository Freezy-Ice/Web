import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { Box, Button, Grid } from '@mui/material';
import ProfileEnum from '../../Helpers/enums/ProfileEnum';
import ProfileComponent from '../../Components/Profile/ProfileComponent';
import FavouriteComponent from '../../Components/Profile/FavouriteComponent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: '15%',
            marginLeft: '15%',
        },
        box: {
            marginTop: '5%',
        },
    }),
);

function ProfilePage() {
    const classes = useStyles();
    const [navigation, setNavigation] = React.useState(ProfileEnum.profil);
    const { t } = useTranslation();

    console.log(navigation);

    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={4}>
                    <Button
                        onClick={() => setNavigation(ProfileEnum.profil)}
                        fullWidth
                        variant="contained"
                        size="large"
                        key={1}
                        sx={{ display: 'block' }}
                    >
                        <h3>Profil</h3>
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        onClick={() => setNavigation(ProfileEnum.ratings)}
                        fullWidth
                        variant="contained"
                        size="large"
                        key={1}
                        sx={{ display: 'block' }}
                    >
                        <h3>Komentarze</h3>
                    </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                        onClick={() => setNavigation(ProfileEnum.favourite)}
                        fullWidth
                        variant="contained"
                        size="large"
                        key={1}
                        sx={{ display: 'block' }}
                    >
                        <h3>Polubione lodziarnie</h3>
                    </Button>
                </Grid>
            </Grid>
            {navigation === ProfileEnum.profil && (
                <Box className={classes.box}>
                    <ProfileComponent />
                </Box>
            )}
            {navigation === ProfileEnum.favourite && (
                <Box className={classes.box}>
                    <FavouriteComponent />
                </Box>
            )}
        </div>
    );
}

export default ProfilePage;
