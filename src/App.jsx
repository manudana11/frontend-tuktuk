import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import {ChakraProvider} from '@chakra-ui/react'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import CreatePost from './components/CreatePost/CreatePost'

//PARA VER COMO TARJETITAS EL LOGIN Y EL REGISTER QUITAR EL CHAKRAPROVIDER

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <div className='space'></div>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
