import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faTag, faTags, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import CancelIcon from '@material-ui/icons/Cancel';
import { useForm } from "react-hook-form";


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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,  } = useForm();


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openMail, setOpenMail] = React.useState(false);
  const [openSign, setOpenSign] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenMail = () => {
    setOpenMail(true);
    setOpen(false);
  };

  const handleCloseMail = () => {
    setOpenMail(false);
  };

  const handleOpenSign = () => {
    setOpenSign(true);
    setOpenMail(false)
  }

  const handleCloseSign = () => {
    setOpenSign(false)
  }


  const handleGoogle = ()=>{
    window.location.assign('http://admin.atikshakil.info/social/login/google')
  }
  const handleFacebook =()=>{
    window.location.assign('http://admin.atikshakil.info/social/login/facebook')
  }
  const onSubmit = data =>{
    const loginCredentials = {
      email:data.email,
      password:data.password
    }
    fetch('https://admin.atikshakil.info/api/login',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(loginCredentials)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data.token)
      sessionStorage.setItem('token',data.token)
      window.location.assign('/user')
    })
  }
  const onRegister = data =>{
    const registrationCredintials = {
      name:data.name,
      email:data.email,
      password:data.password,
      password_confirmation:data.confirm
    }
    //console.log(registrationCredintials)
    fetch('https://admin.atikshakil.info/api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(registrationCredintials)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.alert('Registration Successful. Please Login')
        window.location.assign('/')
      })
  }
  return (
    <div>
      <li><FontAwesomeIcon icon={faUserAlt} onClick={handleOpen} className='navbar-icon' /></li>
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
                  Welcome to Shadmon !
                </Typography>
                <Typography>Login to manage your account.</Typography>

                <div className="mt-4">
                  <div className="d-flex mt-5">
                    <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'green' }} icon={faTags} />
                    <Typography variant="p">
                      Start posting your own ads
                    </Typography>
                  </div>

                  <div className="d-flex mt-5">
                    <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'purple' }} icon={faSearchDollar} />
                    <Typography variant="p">
                      Mark ads as favorite and view them later
                    </Typography>
                  </div>

                  <div className="d-flex mt-5">
                    <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'cyan' }} icon={faTag} />
                    <Typography variant="p">
                      View and manage your ads at your convenience
                    </Typography>
                  </div>
                </div>
              </Grid>

              {/* Login Grid */}

              <Grid item lg={6}>
                <CancelIcon className={classes.cancelBtn} onClick={handleClose} />
                <div className="text-center">
                  <div className="mt-5">

                    <div class="d-grid gap-2 col-12 mx-auto ms-3">
                      <button class="btn btn-outline-dark" type="button" onClick={handleGoogle}>Log in with Google</button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div class="d-grid gap-2 col-12 mx-auto ms-3">
                      <button class="btn btn-primary " type="button" onClick={handleFacebook}>Log in with Facebook</button>
                    </div>
                  </div>
                  <div className="mt-3 mb-5">

                    <div class="d-grid gap-2 col-12 mx-auto ms-3">
                      <button class="btn btn-primary btnColor" onClick={() => handleOpenMail(true)} onClose={handleClose} type="button">Log in with Email</button>
                    </div>

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
      {/* 2nd modal */}
      <div>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}

          open={openMail}
          onClose={handleCloseMail}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openMail}>
            <div className={classes.paper}>
              <Grid container>
                <Grid className={classes.leftGrid} item lg={6}>
                  <Typography
                    variant="h6"
                  >
                    Log in to Shadamon
                  </Typography>
                  <Typography>To view your ads and account details, please login to your Bikroy account.</Typography>

                  <div className="mt-4">
                    <div className="d-flex mt-5">
                      <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'green' }} icon={faTags} />
                      <Typography variant="p">
                        Start posting your own ads
                      </Typography>
                    </div>

                    <div className="d-flex mt-5">
                      <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'purple' }} icon={faSearchDollar} />
                      <Typography variant="p">
                        Mark ads as favorite and view them later
                      </Typography>
                    </div>

                    <div className="d-flex mt-5">
                      <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'cyan' }} icon={faTag} />
                      <Typography variant="p">
                        View and manage your ads at your convenience
                      </Typography>
                    </div>
                  </div>
                </Grid>

                {/* Login Grid */}

                <Grid item lg={6}>
                  <CancelIcon className={classes.cancelBtn} onClick={handleCloseMail} />

                  <form onSubmit={handleSubmit(onSubmit)} className="ms-4">

                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" required {...register("email")} name='email' />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" required  {...register("password")} name='password' />
                    <br />
                    <div class="d-grid gap-2 col-12 mx-auto">
                      <input type="submit" className='btn btn-primary' />
                    </div>
                    <br />
                    <div className="text-center">
                      <a href="#">Forgot Password?</a>
                    </div>
                    <div className="mt-5 text-center">
                      <Typography>Don't have an account yet?</Typography>
                      <div class="d-grid gap-2 col-12 mx-auto ms-3">
                        <Button variant="default" type="button" onClick={() => handleOpenSign(true)} onClose={handleCloseSign} >
                          SignUp
                        </Button>
                      </div>
                    </div>
                  </form>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>

      </div>

      {/* 3rd modal start*/}

      <div>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}

          open={openSign}
          onClose={handleCloseSign}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openSign}>
            <div className={classes.paper}>
              <Grid container>
                <Grid className={classes.leftGrid} item lg={6}>
                  <Typography
                    variant="h6"
                  >
                    Log in to Shadamon
                  </Typography>
                  <Typography>To view your ads and account details, please login to your Bikroy account.</Typography>

                  <div className="mt-4">
                    <div className="d-flex mt-5">
                      <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'green' }} icon={faTags} />
                      <Typography variant="p">
                        Start posting your own ads
                      </Typography>
                    </div>

                    <div className="d-flex mt-5">
                      <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'purple' }} icon={faSearchDollar} />
                      <Typography variant="p">
                        Mark ads as favorite and view them later
                      </Typography>
                    </div>

                    <div className="d-flex mt-5">
                      <FontAwesomeIcon style={{ fontSize: 30, marginRight: 15, color: 'cyan' }} icon={faTag} />
                      <Typography variant="p">
                        View and manage your ads at your convenience
                      </Typography>
                    </div>
                  </div>
                </Grid>

                {/* Login Grid */}

                <Grid item lg={6}>

                  <form className="ms-4" onSubmit={handleSubmit2(onRegister)}>
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" {...register2("name")} name='name' />
                    <br />
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control"  {...register2("email")} name='email' />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" {...register2("password")} name='password' />
                    <br />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className="form-control" name='password_confirmation'  {...register2("confirm")} />
                    <br />
                    <input type="submit" className='btn btn-primary btnColor' />
                    <div class Name="mt-5 text-center">
                      <Typography>Already Have an Account?</Typography>

                    </div>
                  </form>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>

      </div>

      {/* 3rd end */}

    </div>
  );
}
