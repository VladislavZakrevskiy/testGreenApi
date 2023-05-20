//@ts-nocheck
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setChatId } from '../store/reducers/ChatSlice'
import classes from '../styles/menu.module.scss'
import { Typography } from '@mui/material';


interface IMenuItemProps {
    chatId: string

}

const MenuItem = ({chatId}: IMenuItemProps) => {
    const {chatId: currentChatId} = useAppSelector(state => state.chatSlice)
    const dispatch = useAppDispatch()

    const connectChatId = () => {
        dispatch(setChatId(chatId))
    }

    return (
        <div 
            className={classes.menu_item} 
            style={{backgroundColor: currentChatId === chatId ? '#ff7' : '#fff'}}
            onClick={connectChatId}
        >
            <Typography>
                {chatId.split("@")[0]}
            </Typography>
        </div>
    )
}

export default MenuItem