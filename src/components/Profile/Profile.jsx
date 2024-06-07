import React from 'react'
import {Image, Button, Wrap, WrapItem, Center, Spinner, Card, CardBody} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from 'antd'




const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const post = useSelector((state) => state.posts)


    if(!user) {
       return <Spinner color='red.500' justify='center' />
    }

  return (
    <Wrap spacing='20px' align='center' width='100%' justify='center'>
        <WrapItem>
            <Center>
                <Image borderRadius='full' boxSize='150px' src={user.profilePic ? `https://backend-tuktuk.onrender.com/${user.profilePic.substring(6)}` : 'https://imgs.search.brave.com/gV6Xy99WsNTWpgT2KUNxopKhP45u8QMrrL2DGi5HYxg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc'} alt="User profile" className="post-user-image"/>
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
            <Divider></Divider>
            <Card maxW='sm' className='post-container'>
                {Array.isArray(post) && post.map((post, i) => {
                    console.log('Post:', post);
                    return (
                        <CardBody key={i}>
                            <Image boxSize='sm' src={`https://backend-tuktuk.onrender.com/${post.imgpost.substring(6)}`} alt='imgPost' />
                        </CardBody>
                    )
                })}
            </Card>
    </Wrap>
  )
}

export default Profile