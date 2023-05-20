//@ts-nocheck
import classes from '../styles/menu.module.scss'
import { Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { pushChatId, setChatId } from '../store/reducers/ChatSlice';

const NewChatForm = () => {
    const [number, setNumber] = useState<string>('')
    const dispatch = useAppDispatch()

    const createChat = () => {
        dispatch(pushChatId(`${number}@c.us`))
        dispatch(setChatId(`${number}@c.us`))
        setNumber('')
    }

    return (
        <div className={[classes.menu_item, classes.number_form].join(' ')}>
            <Typography>Введите номер телефона, кому хотите написать</Typography>
            <TextField
                label='Номер с кодом страны'
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <Button onClick={createChat}>Создать чат</Button>
        </div>
    )
}

export default NewChatForm