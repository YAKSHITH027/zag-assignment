import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react'
import {
  nameValidate,
  cardValidate,
  yearValidate,
  cvvValidate,
} from '../Utils/Validation'
import { useForm } from 'react-hook-form'
import LoadingModal from '../Components/PaymentPage/LoadingModal'
import SuccessModal from '../Components/PaymentPage/SuccessModal'
import { useNavigate } from 'react-router-dom'
const PaymentUI = () => {
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  async function handleLogin(data) {
    try {
      console.log('here', data)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setShow(true)
        setTimeout(() => {
          setShow(false)
          navigate('/')
        }, 2000)
      }, 2000)
    } catch (error) {}
  }
  console.log(errors)
  return (
    <Box pos={'relative'}>
      <Center w='100%' h='100vh'>
        <Box mx='1' maxW='md' p='2rem' borderWidth='3px' borderRadius='lg'>
          <Heading mb='4' size='lg' textAlign='center'>
            Zag
          </Heading>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl isInvalid={errors.number}>
              <FormLabel>Card Number</FormLabel>
              <Input
                textTransform={'none'}
                type='number'
                placeholder='Enter number'
                {...register('number', cardValidate)}
              />
              <FormErrorMessage>{errors.number?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.name}>
              <FormLabel>Name on Card</FormLabel>
              <Input
                type='name'
                placeholder='name'
                {...register('name', nameValidate)}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <Flex gap='1rem'>
              <FormControl isInvalid={errors.year}>
                <FormLabel>Expiration Date</FormLabel>
                <Input
                  type='year'
                  placeholder='year'
                  {...register('year', yearValidate)}
                />
                <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
              </FormControl>{' '}
              <FormControl isInvalid={errors.cvv}>
                <FormLabel>Security Code</FormLabel>
                <Input
                  type='cvv'
                  placeholder='cvv'
                  {...register('cvv', cvvValidate)}
                />
                <FormErrorMessage>{errors.cvv?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
            <Button mt={4} type='submit' colorScheme={'pink'} width='100%'>
              Pay Now
            </Button>
          </form>
        </Box>
      </Center>
      {loading && <LoadingModal />}
      {show && <SuccessModal />}
    </Box>
  )
}

export default PaymentUI
