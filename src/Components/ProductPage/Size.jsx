import { Box, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

const Size = () => {
  const [selected, setSelected] = useState('L')
  const size = ['S', 'M', 'L', 'XL', 'XLL']
  return (
    <Box width='261px' height='76px' ml={'25px'} mt='26px'>
      <Heading fontSize={'16px'} fontWeight={'600'} lineHeight={'150%'}>
        Size
      </Heading>
      <Flex gap={'1rem'} mt={'12px'}>
        {size.map((item) => {
          return (
            <Flex
              justify={'center'}
              align={'center'}
              borderWidth={'1px'}
              borderRadius={'50%'}
              width={'40px'}
              height={'40px'}
              fontSize={'14px'}
              fontWeight={'600'}
              onClick={() => {
                setSelected(item)
              }}
              bg={selected == item ? 'black' : 'white'}
              color={selected == item ? 'white' : '#888888'}
            >
              {item}
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}

export default Size
