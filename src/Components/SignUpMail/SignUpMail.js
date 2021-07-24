import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: '50%',
    borderRadius: 10,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button"
      variant="contained"
       onClick={handleOpen}>
        Continue with Email
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
            variant="h5"
            align="center"
            >
                Sign Up With Email
            </Typography>
            <br />
            <form action="">
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
                <br />
                <button className="btn btn-success">Submit</button>
                <div className="mt-5 text-center">
                    <h6>Forgot Password?</h6>
                    <Typography>Don't have an account yet?</Typography>
                    <Button>Sign Up</Button>
                </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}