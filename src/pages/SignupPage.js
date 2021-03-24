import React from 'react';

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
  signup: {
    fontSize: '2.5rem',
    color: 'white', //383D3D
    marginBottom: '1rem'
  },
  formdiv: {
    background: 'white',
    borderRadius: 10,
    width: '60%',
    maxWidth: '700px',
    height: '40%',
    minHeight: '400px',
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
  }
});

function SignupPage() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className={classes.signup}>
        <b>SIGN UP</b>
      </div>

      <div className={classes.formdiv}>
        <div className={classes.form}>
          <form> 
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_id" label="아이디" fullWidth="true"/>
              </Grid>
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_pw" label="비밀번호" type="password" fullWidth="true"/>
              </Grid>
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_pwcheck" label="비밀번호확인" type="password" fullWidth="true"/>
              </Grid>
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_nn" label="닉네임" fullWidth="true"/>
              </Grid>

            <Button variant="contained" disableElevation className={classes.button}>회원가입</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;