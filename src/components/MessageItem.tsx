//@ts-nocheck
import { IHistoryMessageResponse } from '../models/responses/IHistoryMessageResponse';
import { IMessageResponse } from '../models/responses/IMessageResponse'
import classes from '../styles/messages.module.scss'
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAppSelector } from '../store/hooks';

type IMessageItemProps = {
  message: IMessageResponse & IHistoryMessageResponse & IMessage
}

interface IMessage {
  author: string
  message: string
}

const MessageItem = ({message}: IMessageItemProps) => {
  const [info, setInfo] = useState<IMessage>()
  const {chatId} = useAppSelector(state => state.chatSlice)

  useEffect(() => {
    if(message?.type === 'incoming') {
      if(message.chatId === chatId) {
      
      } else return
    }
    if(message.author) {
      setInfo({
        author: message.author,
        message: message.message
      })
      return 
    }
    if(message.typeMessage) {
      setInfo({
        author: message.senderName ? message.senderName : 'Вы',
        message: message.textMessage
      })
      return 
    }
    if(message.typeMessage === '') {
      return
    }
    setInfo({
      author: message?.body.senderData?.senderName!,
      message: message?.body?.messageData?.textMessageData?.textMessage!
    })
  }, [])

  if(message?.typeMessage === '') {
    return null
  }

  return (
    <div className={classes.message}>
      <Typography component={'p'}>{info?.author}</Typography>
      <Typography component={'h6'}>{info?.message}</Typography>
    </div>
  )
}

export default MessageItem