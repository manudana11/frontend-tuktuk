import React from 'react'
import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import { MessageOutlined } from '@ant-design/icons'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex as="header" width="100%" alignItems="center" >
      <Box flex="1" textAlign="center">
        <Image src="src/assets/Logo-tuktuk-pj.png" alt="logo-Tuktuk" className='logo-header' maxWidth="50px" margin="0 auto"/>
      </Box>
      <Box>
        <Link to='/chat'><MessageOutlined style={{ fontSize: '24px' }} /></Link>
      </Box>
    </Flex>
  )
}

export default Header
