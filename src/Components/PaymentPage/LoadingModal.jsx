import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import spinner from '../../Assets/spinner.svg'

const LoadingModal = () => {
  return (
    <Box
      bg='gray.200'
      width={'375px'}
      height='100vh'
      zIndex={'9'}
      pos={'fixed'}
      top={0}
    >
      <Flex
        justify={'center'}
        align={'center'}
        gap='1rem'
        flexDir={'column'}
        borderWidth={'1px'}
        padding={'2rem'}
        borderRadius={'5px'}
        pos={'absolute'}
        top={'13rem'}
        left='50%'
        transform={'translate(-50%)'}
        bg='white'
        width={'90%'}
        zIndex={'10'}
      >
        <Image src={spinner} width={'20px'} height='20px' />
        <Heading fontSize={'15px'} textAlign={'center'}>
          Payment is Processing
        </Heading>
        <Text>Please wait do not close this </Text>
      </Flex>
    </Box>
  )
}

export default LoadingModal
