import { TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import {userInfo} from '../store/reducers/ChatSlice'
import classes from '../styles/auth.module.scss'

const Form = () => {
    const [idInstance, setIdInstance] = useState<string>('')
    const [apiTokenInstance, setApiTokenInstance] = useState<string>('')
    const nav = useNavigate()
    const dispatch = useAppDispatch()

    const authHandler = () => {
        dispatch(userInfo({apiTokenInstance, idInstance}))
        nav('/chat')
    }

  return (
    <div className={classes.form}>
        <Typography fontSize={24} fontWeight={700} color={'rgba(0,0,0,.5)'}>Войти</Typography>
        <TextField
            label='idInstance'
            value={idInstance}
            onChange={e => setIdInstance(e.target.value)}
        />
        <TextField
            label='apiTokenInstance'
            value={apiTokenInstance}
            onChange={e => setApiTokenInstance(e.target.value)}
        />
        <Button 
            onClick={authHandler}
            variant='contained'
        >Войти</Button>
    </div>
  )
}

export default Form