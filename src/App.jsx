import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleCategory from './components/SingleCategory'
import SingleMeal from './components/SingleMeal'
import Navbar from './components/Navbar'
import "./App.css"
import Favourite from './pages/Favourite'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <BrowserRouter>
    <Toaster/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categories/:id" element={<SingleCategory/>}/>
      <Route path="/meal/:id" element={<SingleMeal/>}/>
      <Route path="/favourite" element={<Favourite/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App