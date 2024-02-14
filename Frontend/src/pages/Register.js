import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import loginImage from '../images/about4.webp';
import { TextField, Button, Typography, Grid, DialogActions, DialogContent, DialogTitle, Dialog } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import Layout from '../components/Layout/Layout';

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [openRecoveryDialog, setOpenRecoveryDialog] = useState(false);

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setUsername(value);
    setUsernameError('');

    if (value.length < 1) {
      setUsernameError('*This field is required');
    } else if (value.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      setUsernameError('*Invalid username');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError('');

    if (value.length < 1) {
      setPasswordError('*This field is required');
    } else if (!/^.{4,}$/.test(value)) {
      setPasswordError('*Enter a valid password (at least 4 characters)');
    }
  };
  const handleCancel = () => {
    // Redirect to the home page
    navigate('/');
  };
  const handleOpenRecoveryDialog = () => {
    setOpenRecoveryDialog(true);
  };
  const handleCloseRecoveryDialog = () => {
    setOpenRecoveryDialog(false);
  };

  const handleRecoverySubmit = (e) => {
    e.preventDefault();
    handleCloseRecoveryDialog();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsernameError('');
    setPasswordError('');

    if (username.length < 1) {
      setUsernameError('*This field is required');
    } else if (username.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
    } else if (!/^[A-Za-z\s]+$/.test(username)) {
      setUsernameError('*Invalid username');
    }

    if (password.length < 1) {
      setPasswordError('*This field is required');
    } else if (!/^.{4,}$/.test(password)) {
      setPasswordError('*Enter a valid password (at least 4 characters)');
    }

    if (username === 'Bala' && password === 'Mala') {
      // Perform login logic here (e.g., set auth state, store token, etc.)
      console.log('Login successful');
    

    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="login-image-container">
              <img src={loginImage} alt="Login" className="login-image" style={{ marginTop: "50px", width: "450px" }} />
            </div>
          </div>
          <div className="col-md-6" style={{ marginTop: "50px" }}>
            <div className="vector" style={{borderRadius:"20px"}}>
              <div className="container-fluid">
                <div className="row" >
                  <div className="col-md-12" >
                    <a href='http://localhost:3000/' style={{ textDecoration: "none",textAlign:"left",position:'relative',left:'2rem' }}>  <p className="oc">HOME / BACK</p> </a>
                    <h3 className="oc" style={{textAlign:"left",fontFamily:'serif',fontWeight:'600',color:'#66023b',position:'relative',left:'2rem'}} >LOGIN FORM</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={1}>
                    <AccountCircle />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="username"
                      label="Username"
                      value={username}
                      onChange={handleUsernameChange}
                      onBlur={handleUsernameChange}
                      error={Boolean(usernameError)}
                      helperText={usernameError}
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Lock />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      onBlur={handlePasswordChange}
                      error={Boolean(passwordError)}
                      helperText={passwordError}
                      fullWidth
                      variant="outlined"
                    />
                     <Link 
          variant="contained"
          color="secondary"
          onClick={handleOpenRecoveryDialog}
          style={{ width: "26%", marginLeft: "0.5rem", marginTop: "20px",textDecoration:'none' }}
        >
          Forget Password
        </Link>
                  </Grid>
                  <Dialog open={openRecoveryDialog} onClose={handleCloseRecoveryDialog}>
        <DialogTitle>Account Recovery</DialogTitle>
        <DialogContent>
          <form onSubmit={handleRecoverySubmit}>
            <TextField
              label="Enter your email address or username"
              fullWidth
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRecoveryDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRecoverySubmit} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
                  <Grid item xs={12} style={{position:'relative',bottom:'1.8rem',right:'1rem'}}>
        <Button variant="contained" color="secondary" onClick={handleCancel} style={{ width: "26%", marginLeft: "3.5rem", marginTop: "20px" }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" style={{ width: "26%", marginLeft: "1rem", marginTop: "20px" }}>
          Login
        </Button>
      </Grid>
                </Grid>
                <style>
  {`
    @media (max-width: 768px) {
      .login-image {
        position: relative;
        left: 0rem;
        display: none;
      }
        
  `}
</style>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
