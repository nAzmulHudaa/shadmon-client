import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faTag, faTags, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import CancelIcon from '@material-ui/icons/Cancel';
import SignUpMail from '../../Components/SignUpMail/SignUpMail';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5,
    width: '50%'
  },
  leftGrid: {
      borderRight: "1px solid lightgrey",
      padding: 10
  },
  adText: {
      marginTop: 20,
      marginBottom: 20,
      color: '#696767'
  },
  cancelBtn: {
      color: 'green',
      cursor: 'pointer',
      position: 'relative',
      left: 320,
      top: '-20px'
  }
}));


export default function LoginPopup() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleLoginClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <li><FontAwesomeIcon icon={faUserAlt} onClick={handleOpen} className='navbar-icon' /></li>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container>
                <Grid className={classes.leftGrid} item lg={6}>
                    <Typography
                    variant="h6"
                    >
                        Welcome to Shadmon !
                    </Typography>
                    <Typography>Login to manage your account.</Typography>

                        <div className="mt-4">
                            <div className="d-flex mt-5">
                            <FontAwesomeIcon style={{fontSize: 30, marginRight: 15, color: 'green'}} icon={faTags} />
                            <Typography variant="p"> 
                            Start posting your own ads
                            </Typography>
                            </div>

                            <div className="d-flex mt-5">
                            <FontAwesomeIcon style={{fontSize: 30, marginRight: 15, color: 'purple'}} icon={faSearchDollar} />
                            <Typography variant="p"> 
                            Mark ads as favorite and view them later
                            </Typography>
                            </div>

                            <div className="d-flex mt-5">
                            <FontAwesomeIcon style={{fontSize: 30, marginRight: 15, color: 'cyan'}} icon={faTag} />
                            <Typography variant="p"> 
                            View and manage your ads at your convenience
                            </Typography>
                            </div>
                        </div>
                </Grid>

                {/* Login Grid */}
                
                <Grid item lg={6}>
                    <CancelIcon className={classes.cancelBtn} onClick={handleLoginClose}/>
                    <div className="text-center">
                        <div className="mt-5">
                        
                        <div class="d-grid gap-2 col-12 mx-auto ms-3">
                          <button class="btn btn-outline-dark" type="button">Log in with Google</button>
                        </div>
                        </div>
                        <div className="mt-3">
                        <div class="d-grid gap-2 col-12 mx-auto ms-3">
                          <button class="btn btn-primary "  type="button">Log in with Facebook</button>
                        </div>
                        </div>
                        <div className="mt-3 mb-5">
                        
                        <SignUpMail handleLoginClose={handleLoginClose}/>
                        </div>

                        <div>
                            <small>
                            By signing up for an account you agree to our
                            <a href="#"> Terms and Conditions</a>
                            </small>
                        </div>
                    </div>
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      
    </div>
  );
}