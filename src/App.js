import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import NavigationBar from './Components/NavigationBar'
import Loading from './Components/Loading'

const ProductPage = lazy(() => import('./Pages/ProductPage'))
const HomePage = lazy(() => import('./Pages/HomePage'))
const PaymentUI = lazy(() => import('./Pages/PaymentUI'))

function App() {
  return (
    <BrowserRouter>
      <Box bg={'#1A202C'} width={'full'} minH={'100vh'}>
        <Box minH={'100vh'} mx={'auto'} bg={'#FFFFFF'}>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path='/product'
              element={
                <Suspense fallback={<Loading />}>
                  <ProductPage />
                </Suspense>
              }
            />

            <Route
              path='/pay'
              element={
                <Suspense fallback={<Loading />}>
                  <PaymentUI />
                </Suspense>
              }
            />
          </Routes>
          <NavigationBar />
        </Box>
      </Box>
    </BrowserRouter>
  )
}

export default App
