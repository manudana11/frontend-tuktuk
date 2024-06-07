import React from 'react'
import {Box, Image, Button, Wrap, WrapItem, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'


const Profile = () => {
    const dispatch = useDispatch()

  return (
    <Wrap spacing='20px' align='center' width='100%'>
        <WrapItem>
            <Center>
                <Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' alt='pic Profile' />
            </Center>
        </WrapItem>
        <WrapItem>
            <Center w='150px' h='60px' gap={2}>
                <Button colorScheme='teal' variant='outline'>Options</Button>
                <Button colorScheme='teal' variant='outline'><Link to='/' onClick={() =>{dispatch(logout())}}>Logout</Link></Button>
            </Center>
        </WrapItem>
            <Center>
                <Button colorScheme='teal' variant='outline'>Follow</Button>
            </Center>
    </Wrap>
  )
}

export default Profile