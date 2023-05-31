import { useState } from 'react';
import logo from '../../assets/logo.png'
import { useAuthContext } from '../../Providers/authProvider';
import DotSpinner from '../Loader';
import menu from '../../assets/menu.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const path = useLocation().pathname.split('/')[1]
    const navigate = useNavigate()
    const { isUser, loggedUser, logOut } = useAuthContext()
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-[50px] justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex">
                            {/* Website logo */}
                            <img className="h-10 md:hidden" onClick={toggleNavbar} src={menu} alt="menu" />
                            <Link to={'/'}>
                                <img className="h-10 " src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="hidden md:block ml-4">
                            {/* Website name */}
                            <span className="text-white font-semibold text-lg">GeniusGadgets</span>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        {/* Home */}
                        <Link to="/" className={`text-gray-300 hover:bg-gray-700 ${path === '' && 'bg-gray-700'} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Home </Link>
                        {/* All Toys */}
                        <Link to="/all-toys" className={`text-gray-300 ${path === 'all-toys' && 'bg-gray-700'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>All Toys</Link>
                        {
                            isUser && <>
                                <Link to="/my-toys" className={`text-gray-300 hover:bg-gray-700 ${path === 'my-toys' && 'bg-gray-700'} hover:text-white px-3 py-2 rounded-md text-sm font-medium1`}>My Toys</Link>
                                <Link to="/add-toy" className={`text-gray-300 hover:bg-gray-700 ${path === 'add-toy' && 'bg-gray-700'}  hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Add A Toy</Link>
                            </>
                        }

                        {/* Blogs */}
                        <Link to="/blogs" className={`text-gray-300 hover:bg-gray-700 ${path === 'blogs' && 'bg-gray-700'} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>Blogs</Link>
                        {
                            isUser && <button onClick={() => { logOut(); navigate('/login') }}  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</button>
                        }
                    </div>
                    <div className="flex items-center">
                        {
                            isUser ?
                                loggedUser?.photoURL ? <img className="h-[35px] w-[35px] rounded-full" src={loggedUser?.photoURL} title={loggedUser?.displayName} alt="Profile" /> : <DotSpinner /> :
                                <Link to="/login" className={`text-gray-300 hover:bg-gray-700 hover:text-white ${path === 'login' && 'bg-gray-700'}  px-3 py-2 rounded-md text-sm font-medium`}>Login</Link>
                        }

                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    {/* Home */}
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    {/* All Toys */}
                    <Link to="/all-toys" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">All Toys</Link>
                    {/* My Toys */}
                    <Link to="/my-toys" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">My Toys</Link>
                    {/* Add A Toy */}
                    <Link to="/add-toy" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add A Toy</Link>
                    {/* Blogs */}
                    <Link to="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
                    {
                        isUser && <button  onClick={() => { logOut(); navigate('/login') }}   className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</button>
                    }
                </div>
            </div>
        </nav>

    )
}
export default Navbar