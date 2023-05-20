//@ts-nocheck
import Menu from '../components/Menu'
import MessageList from '../components/MessageList'
import Writer from '../components/Writer'
import { IMessageResponse } from '../models/responses/IMessageResponse';
import { useDeleteNotificationMutation, useGetHistoryMutation, useGetNotificationQuery } from '../store/API/ChatAPI';
import { useAppSelector } from '../store/hooks';
import classes from '../styles/main.module.scss'
import { useState, useEffect } from 'react';


const Chat = () => {
  const {user, chatId} = useAppSelector(state => state.chatSlice)
  const [messages, setMessages] = useState<IMessageResponse[]>([])
  const [deleteNotification, {data: deletedNotification}] = useDeleteNotificationMutation()
  const {data: Notification} = useGetNotificationQuery({apiTokenInstance: user!.apiTokenInstance, idInstance: user!.idInstance}, {pollingInterval: 6000})
  const [getMessages, {data: beforeMessages, isSuccess}] = useGetHistoryMutation()

  useEffect(() => {
    if(chatId){
      getMessages({chatId, user: user!})

    }
  }, [chatId])

  useEffect(() => {
    if(isSuccess) {
      console.log(beforeMessages)
      setMessages([...beforeMessages].reverse())
    }
  }, [isSuccess])

  useEffect(() => {
    if(!Notification) {  
      return 
    }
    if(Notification?.body?.typeWebhook === 'incomingMessageReceived') {
      setMessages(prev => [...prev, Notification])
    }
    deleteNotification({user: user!, receiptId: Notification.receiptId})
  }, [Notification])


  return (
    <div className={classes.main}>
        <Menu/>
        <div className={classes.chat}>
          <MessageList messages={messages}/>
          <Writer setMessages={setMessages} />
        </div>
    </div>
  )
}

export default Chat