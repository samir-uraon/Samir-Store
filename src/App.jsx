import { useState } from 'react'

import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Products from './pages/Products'
import Contact from './pages/Contact'
import Error from './pages/Error'
import ProductPage from './pages/ProductPage'
function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Login' element={<Products/>} />
      <Route path='/Cart' element={<Contact/>} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>


      </>
  )
}

export default App
