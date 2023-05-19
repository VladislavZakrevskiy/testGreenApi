import classes from '../styles/menu.module.scss'
import MenuList from './MenuList'
import NewChatForm from './NewChatForm'

const Menu = () => {
  return (
    <div className={classes.menu}>
        <MenuList/>
        <NewChatForm/>
    </div>
  )
}

export default Menu
