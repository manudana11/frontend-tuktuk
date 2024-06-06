import React from 'react'
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import {ChatIcon} from '@chakra-ui/icons'


const Header = () => {
  
  return (
   <Wrap spacing='120px'>
      <WrapItem>
        <Center>
          <ChatIcon/>
        </Center>
      </WrapItem>
   </Wrap>
  )
}

export default Header