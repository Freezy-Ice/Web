// @flow
import { Typography } from '@mui/material';
import * as React from 'react';

export function Footer() {
    return (
        <Typography
            variant="body2"
            color="textSecondary"
            align="center"
        >
            {'Copyright © '}
            Freezy-Ice {new Date().getFullYear()}.
        </Typography>
    );
}
