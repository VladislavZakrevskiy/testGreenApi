//@ts-nocheck
import { useAppSelector } from '../store/hooks'
import classes from '../styles/menu.module.scss'
import MenuItem from './MenuItem'

const MenuList = () => {
    const {chatIdArray} = useAppSelector(state => state.chatSlice)

  return (
    <div className={classes.menu_list}>
        {
            chatIdArray.map(chatId => <MenuItem chatId={chatId} key={chatId}/>)
        }
    </div>
  )
}

export default MenuList