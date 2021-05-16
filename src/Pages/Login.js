import React from 'react';

import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  body: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection:'column',
    padding:'10px',
    width: '200px'
  },
  formItens: {
    margin: '2px',
  }
})

function Login() {

  const classes = useStyles();

  return (
    <div className={ classes.body }>
      <form className={classes.form } noValidate autoComplete="off">
        <TextField 
          className={classes.formItens}
          id="standard-basic" 
          label="Nickname" />
        <Button 
          className={classes.formItens}
          variant="contained" 
          color="primary" 
          href="#contained-buttons">
          NEXT
        </Button>
      </form>
    </div>
  )
}

export default Login;