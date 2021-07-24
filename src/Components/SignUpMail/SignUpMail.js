import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Typography } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { UserContext } from '../../App';
import CancelIcon from '@material-ui/icons/Cancel';
import SignUpModal from '../SignUpModal/SignUpModal';


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
  cancelBtn: {
    color: 'green',
    cursor: 'pointer',
    position: 'relative',
    left: 625,
    top: '-50px'
}
}));

export default function TransitionsModal() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const [token,setToken] = useState('')
 const onSubmit = data =>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginCredentials = {
      email:email,
      password:password
    }
    fetch('http://admin.atikshakil.info/api/login',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      }, 
      body: JSON.stringify(loginCredentials)
    })
    .then(response => response.json())
    .then(data=>{
      //console.log(data);
      setToken(data)
      sessionStorage.setItem('token',data.token);
      window.location.assign('/user');
      setLoggedInUser(true);
    })
  }
//  console.log(token);



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
                Sign In With Email
            </Typography>
            <CancelIcon className={classes.cancelBtn} onClick={handleClose}/>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Email</label>
                <input type="text" className="form-control" name='email' id='email' />
                <br />
                <label htmlFor="">Password</label>
                <input name='password' type="password" className="form-control" id='password' />
                <br />
                <input type="submit" className='submitBtn btn btn-primary'  />
                <div className="mt-5 text-center">
                    <h6>Forgot Password?</h6>
                    <Typography>Don't have an account yet?</Typography>
                    <SignUpModal />
                </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}