// @flow
import { Alert, Snackbar } from '@mui/material';
import * as React from 'react';

export default function ErrorSnack() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    handleClose();
  });

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success">
        Success!
      </Alert>
    </Snackbar>
  );
}
