import React from 'react'
import menu from '../../Assets/HomePage/menu.png'
import profile from '../../Assets/HomePage/profileImage.png'
import { Button, Flex, Image } from '@chakra-ui/react'
const Menubar = () => {
  return (
    <Flex justify={'space-between'} align={'center'}>
      <Button p='0' width={'35px'} height={'35px'} borderRadius={'50%'}>
        <Image src={menu} width={'35px'} height={'35px'} alt='menu' />
      </Button>
      <Image src={profile} width={'56px'} height={'56px'} alt='profile-pic' />
    </Flex>
  )
}

export default Menubar
