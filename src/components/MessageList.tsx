import { IMessageResponse } from '../models/responses/IMessageResponse'
import MessageItem from './MessageItem'
import classes from '../styles/messages.module.scss'

type IMessageListProps = {
  messages: IMessageResponse[]
}

const MessageList = ({messages}:IMessageListProps ) => {
  return (
    <div className={classes.messages}>
      {
        messages.map(mes => <MessageItem message={mes} key={mes?.receiptId ?  mes?.receiptId : mes?.idMessage}/>)
      }
    </div>
  )
}

export default MessageList