import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer'
import { ToastContainer } from 'react-toastify'
import Navbar from './Components/Shared/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
function App() {
  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-out',
        once: true
      }
    )
  }, [])
  return (
    <div className='max-w-[1240px]  m-auto'>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
