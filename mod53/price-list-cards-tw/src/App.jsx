import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'
import { Footer } from './components/Footer/Footer'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner />
      <h1 className='text-7xl text-purple-600 text-center my-5'>Hello! From Tailwind</h1>
      <PriceList></PriceList>
      <h1 className='text-5xl text-center text-purple-600 my-10 underline'>Simple Line Chart</h1>
      <Dashboard></Dashboard>
      <h1 className='text-5xl text-center text-purple-600 my-10 underline'>Simple Bar Chart</h1>
      <PhoneBar></PhoneBar>
      <Footer />

    </div>
  )
}

export default App
