import React from 'react'
import {Image, Button, Wrap, WrapItem, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'


const Profile = () => {
    const dispatch = useDispatch()

  return (
    
    <Wrap spacing='20px'>
        <WrapItem>
            <Center>
                <Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' alt='pic Profile' />
            </Center>
        </WrapItem>
        <WrapItem>
            <Center w='150px' h='60px' gap={2}>
                <Button colorScheme='teal' variant='outline'>Options</Button>
                <Button colorScheme='teal' variant='outline'><Link to='/login' onClick={() =>{dispatch(logout())}}>Logout</Link></Button>
            </Center>
        </WrapItem>
            <Center>
                <Button colorScheme='teal' variant='outline'>Follow</Button>
            </Center>
        <WrapItem>

        </WrapItem>
    </Wrap>
  )
}

export default Profile


 // <div className='profile-container'>
    //     <div className='pic-div'>
    //         <Image borderRadius='full' boxSize='150px' src='https://bit.ly/dan-abramov' alt='pic Profile' />
    //     </div>
    //     <div className='button-profile'>
    //         <Button colorScheme='teal' variant='outline'>Follow</Button>
            
    //     </div>
    // </div>