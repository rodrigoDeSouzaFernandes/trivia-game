import React, { useContext, useState } from 'react';

import { Button, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../Context/GlobalContext';

const useStyles = makeStyles({
	body: {
		alignItems: 'center',
		background: 'linear-gradient(rgb(50, 50, 100), rgb(10, 80, 100))',
		display: 'flex',
		height: '100vh',
		justifyContent: 'center',
		width: '100%'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		padding: '20px 40px',
		background: 'rgb(250,250,250)',
		borderRadius: '10px'
	},
	formItens: {
		margin: '5px'
	}
});

const numberOfQuestions = [
	{
		label: '5 questions',
		value: 5
	},
	{
		label: '10 questions',
		value: 10
	},
	{
		label: '15 questions',
		value: 15
	},
	{
		label: '20 questions',
		value: 20
	},
	{
		label: '25 questions',
		value: 25
	}
];

function Login({history}) {
	const classes = useStyles();
	const [ nQuestions, setNQuestions ] = useState(5);
	const [ userNick, setUserNick ] = useState('');

  const { setUserInfo } = useContext(GlobalContext);

	const handleChange = ({ target }) => {
		setNQuestions(target.value);
	};

	const handleChangeNick = ({ target }) => {
		setUserNick(target.value);
	};

  const handleSubmit = () => {
    setUserInfo({
      nick: userNick,
      numberOfQuestions: nQuestions
      
    });

    history.push('/main-game');
  }

	return (
		<div className={classes.body}>
			<form className={classes.form} noValidate autoComplete="off">
				<TextField
					className={classes.formItens}
					id="standard-basic"
					value={userNick}
					onChange={handleChangeNick}
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
					onClick={handleSubmit}
					disabled={ userNick.length < 4 }
				>
					NEXT
				</Button>
			</form>
		</div>
	);
}

export default Login;
