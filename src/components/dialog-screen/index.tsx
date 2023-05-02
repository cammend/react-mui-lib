import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

export interface DialogScreenProps {
  title: string;
  open?: boolean;
  handleClose?: () => void;
  handleAccept?: () => void;
}

function DialogScreen(props: DialogScreenProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    if (props.handleClose) {
      props.handleClose();
    }
  };

  const handleAccept = () => {
    if (props.handleAccept) {
      props.handleAccept();
    }
  };

  useEffect(() => {
    setOpen(!!props.open);
  }, [props.open]);

  if (!open) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <Typography variant="h5">{props.title}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
        <Button variant="contained" color="success" onClick={handleAccept}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { DialogScreen };
