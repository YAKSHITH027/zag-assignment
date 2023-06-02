import { Box, Button, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'
import filter from '../../Assets/HomePage/filtter.png'
import searchIcon from '../../Assets/HomePage/searchIcon.png'
const SearchBarSection = () => {
  return (
    <Flex
      mt='19px'
      justify={'space-between'}
      height={'50px'}
      gap={'1rem'}
      position={'relative'}
    >
      <Box flexGrow={'1'}>
        <Input
          minW={'220px'}
          height={'50px'}
          borderRadius={'30px'}
          pl={'58px'}
          bg='#F3F4F5'
          placeholder='Search...'
        />
        <Image
          src={searchIcon}
          position={'absolute'}
          left='26px'
          top='50%'
          transform={'translateY(-50%)'}
          zIndex={'10'}
        />
      </Box>
      <Button p='0' width={'50px'} height={'50px'} borderRadius={'50%'}>
        <Image width={'50px'} height='50px' src={filter} />
      </Button>
    </Flex>
  )
}

export default SearchBarSection
