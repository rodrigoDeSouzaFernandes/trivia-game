import React, { useState } from 'react';

import { Button, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  body: {
    alignItems: 'center',
    background: 'rgb(100,150,150)',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%',

  },
  form: {
    display: 'flex',
    flexDirection:'column',
    padding:'20px 40px',
    background: 'rgb(250,250,250)',
  },
  formItens: {
    margin: '5px',
  }
});

const numberOfQuestions = [
  {
    label: "5 questions",
    value: 5,
  },
  {
    label: "10 questions",
    value: 10,
  },
  {
    label: "15 questions",
    value: 15,
  },
  {
    label: "20 questions",
    value: 20,
  },
  {
    label: "25 questions",
    value: 25,
  },
]

function Login() {

  const classes = useStyles();
  const [nQuestions, setNQuestions] = useState(5);

  const handleChange = ({target}) => {
    setNQuestions(target.value)
  }

  return (
    <div className={ classes.body }>
      <form className={classes.form } noValidate autoComplete="off">
        <TextField 
          className={classes.formItens}
          id="standard-basic" 
          label="Nickname" 
          helperText="Enter your a nickname"
        />
        <TextField 
          className={classes.formItens}
          id="standard-select" 
          select
          value={nQuestions}
          onChange={handleChange}
          helperText="Choose the number of questions"
        >
          {numberOfQuestions.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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