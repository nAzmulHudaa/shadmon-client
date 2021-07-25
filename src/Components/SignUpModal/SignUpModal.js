import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faTag, faTags } from '@fortawesome/free-solid-svg-icons'
import CancelIcon from '@material-ui/icons/Cancel';

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


export default function SignUpModal() {
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
      <Button variant="default" type="button" onClick={handleOpen}>
        SignUp
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
            <Grid container>
                <Grid className={classes.leftGrid} item lg={6}>
                    <Typography
                    variant="h6"
                    >
                        Sign up to Shadmon !
                    </Typography>
                    <Typography>The largest marketplace in Bangladesh</Typography>

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
                    <CancelIcon className={classes.cancelBtn} onClick={handleClose}/>
                    
            <form action="" className="ms-4">
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" />
                <br />
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
                <br />
                <label htmlFor="">Confirm Password</label>
                <input type="password" className="form-control" />
                <br />
                <div class="d-grid gap-2 col-12 mx-auto ">
                  <button class="btn btn-primary btnColor" type="button">Sign up</button>
                </div>
                <div className="mt-5 text-center">
                    <Typography>Already Have an Account?</Typography>
                    <SignUpModal />
                </div>
            </form>
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      
    </div>
  );
}