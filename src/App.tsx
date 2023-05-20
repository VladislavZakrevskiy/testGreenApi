//@ts-nocheck
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './pages/Auth'
import Chat from './pages/Chat'
import './styles/global.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
