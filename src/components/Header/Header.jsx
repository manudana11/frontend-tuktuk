import React, { useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { MessageOutlined, SearchOutlined } from '@ant-design/icons'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    if(e.key === 'Enter') {
      navigate('search/' + text);
    }
  }

  return (
    <div className='header-container'>
    <Flex as="header" width="100%" alignItems="center" >
      <Box>
        <Link to='/Search'><SearchOutlined style={{ fontSize: '24px' }} onKeyUp={handleChange} /></Link>
      </Box>
      <Box flex="1" textAlign="center">
        <Image src="src/assets/Logo-tuktuk-pj.png" alt="logo-Tuktuk" className='logo-header' maxWidth="50px" margin="0 auto"/>
      </Box>
      <Box>
        <Link to='/chat'><MessageOutlined style={{ fontSize: '24px' }} /></Link>
      </Box>
    </Flex>
    </div>
  )
}

export default Header
