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
  login: {
    fontSize: '2rem',
    color: '#383D3D',
    marginBottom: '1rem'
  },
  formdiv: {
    background: 'white',
    borderRadius: 10,
    width: '40%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: "90%"
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
                <TextField id="u_id" label="아이디" color="black" fullWidth="true"/>
              </Grid>
              <Grid item xs={12} className={classes.textfield}>
                <TextField id="u_pw" label="비밀번호" type="password" fullWidth="true"/>
              </Grid>

            <Button variant="contained" disableElevation className={classes.button}>로그인</Button>
            <Button variant="contained" disableElevation className={classes.button}>회원가입</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;