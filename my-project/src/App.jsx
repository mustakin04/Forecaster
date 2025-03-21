import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Meet from './Components/Meet/Meet'
import Features from './Components/Features/Features'
import Membership from './Components/Membership/Membership'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Meet></Meet>
      <Features></Features>
      <Membership></Membership>
    </>
  )
}

export default App
