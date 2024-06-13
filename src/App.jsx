import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import {ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Welcome from './components/Welcome/Welcome'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import CreatePost from './components/CreatePost/CreatePost'
import Post from './components/Post/Post'
import UserConfirmed from './components/UserConfirmed/UserConfirmed'
import PostDetails from './components/PostDetails/PostDetails'
import PrivateZone from './guards/PrivateZone'
import NotFound from './components/NotFound/NotFound'
import ProfileDetails from './components/ProfileDetails/ProfileDetails'



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
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<PrivateZone><Profile/></PrivateZone>} />
          <Route path='/allposts' element={<Post />} />
          <Route path='/confirm' element={<UserConfirmed />} />
          <Route path='/postDetails/:_id' element={<PostDetails />} />
          <Route path='/profileDetails' element={<ProfileDetails/>} />
          <Route path='*' element={<NotFound/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
        <div className='space'></div>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
