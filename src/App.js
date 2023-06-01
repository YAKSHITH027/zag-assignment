import { Box } from '@chakra-ui/react'
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './Pages/ProductPage'
import NavigationBar from './Components/NavigationBar'
import PaymentUI from './Pages/PaymentUI'

function App() {
  return (
    <BrowserRouter>
      <Box bg={'#1A202C'} width={'full'} minH={'100vh'}>
        <Box maxW={'375px'} minH={'100vh'} mx={'auto'} bg={'#FFFFFF'}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/payment' element={<PaymentUI />} />
          </Routes>
          <NavigationBar />
        </Box>
      </Box>
    </BrowserRouter>
  )
}

export default App
