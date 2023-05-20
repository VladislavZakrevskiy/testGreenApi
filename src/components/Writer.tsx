//@ts-nocheck
import { IconButton, TextField } from '@mui/material';
import { useSendMessageMutation } from "../store/API/ChatAPI"
import { useAppSelector } from "../store/hooks"
import {useState} from 'react'
import { SendOutlined } from "@mui/icons-material"
import classes from '../styles/chat.module.scss'
import { IMessage } from "../models/IMessage"
import { IMessageResponse } from "../models/responses/IMessageResponse"

interface IWriterProps {
    setMessages: React.Dispatch<React.SetStateAction<IMessageResponse[]>>

}

const Writer = ({setMessages}: IWriterProps) => {
    const [message, setMessage] = useState<string>('')
    const {user, chatId} = useAppSelector(state => state.chatSlice)
    const [sendMes, {data}] = useSendMessageMutation()

    const sendHandler = () => {
        const messageData: IMessage = {
            chatId, message
        }
        //@ts-ignore
        sendMes({message: messageData, user})
        setMessage('')
        //@ts-ignore
        setMessages(prev => [...prev, {author: 'Вы', message}])
    }

    return (
        <div className={classes.writer}>
            <TextField
                multiline
                fullWidth
                rows={2}
                sx={{height: '100%', bgcolor: '#fff'}} 
                type="text" 
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <IconButton size='large' onClick={sendHandler} color='primary'>
                {
                    message ?
                    <SendOutlined fontSize='large'/>
                    : null
                }
            </IconButton>   
        </div>
    )
}

export default Writer