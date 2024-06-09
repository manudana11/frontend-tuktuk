import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import CreatePost from './components/CreatePost/CreatePost'
import Post from './components/Post/Post'
import PrivateZone from './guards/PrivateZone'
import NotFound from './components/NotFound/NotFound'



function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<PrivateZone><Profile/></PrivateZone>} />
          <Route path='/allposts' element={<Post />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <div className='space'></div>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
