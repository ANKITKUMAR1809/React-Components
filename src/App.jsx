import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const linkarr=["BLOGS","CATEGORY","ABOUT US","CONTACT US"]
  return (
    <>
    <Navbar siteName="SAK" links={linkarr} />
    </>
  )
}

export default App
