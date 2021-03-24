import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    background: '#6C6E6E',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontSize: '2.5rem',
    color: 'white', //383D3D
    marginBottom: '1rem'
  },
  formdiv: {
    background: 'white',
    borderRadius: 10,
    width: '60%',
    maxWidth: '700px',
    height: '30%',
    minHeight: '290px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: "90%",
    minWidth: '250px'
  },
  textfield: {
   paddingLeft: '3rem',
   paddingRight: '3rem',
   marginTop: '1rem'
  },
  button: {
    margin: '1.5rem'
  },
  link: {
    float: "right",
    color: "grey",
  }
});

function LoginPage() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.login}>
        <b>LOGIN</b>
      </div>

      <div className={classes.formdiv}>
        <div className={classes.form}>
          <form> 
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_id" label="아이디"fullWidth="true"/>
              </Grid>
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_pw" label="비밀번호" type="password" fullWidth="true"/>
              </Grid>

            <Button variant="contained" disableElevation className={classes.button}>로그인</Button>
          </form>
          <Link to="/signup" className={classes.link}>회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;