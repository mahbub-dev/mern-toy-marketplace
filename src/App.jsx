import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer'
import Navbar from './Components/Shared/Navbar'
function App() {
  return (
    <div className='max-w-[1240px] m-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
