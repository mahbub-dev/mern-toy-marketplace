import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer'
import { ToastContainer } from 'react-toastify'
import Navbar from './Components/Shared/Navbar'
import 'react-toastify/dist/ReactToastify.css';
function App() {
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
