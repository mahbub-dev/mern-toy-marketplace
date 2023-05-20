import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../../firebase.config';
import { toast } from 'react-toastify';
import { useAuthContext } from '../Providers/authProvider';
import { Navigate } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';


const Registration = () => {
    useTitle('Register')
    const { isUser, setLoggedUser } = useAuthContext()
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    if (isUser) { return <Navigate to={'/'} /> }
    const auth = getAuth(app)
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user, { displayName: name, photoURL })
                setLoggedUser(user)
                localStorage.setItem('uid', user.uid)
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="bg-white p-8 md:w-[500px] rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-gray-700 font-bold mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign up

                        </button>
                        <p className="text-gray-700 text-sm">
                            Already have an accountt?{' '}
                            <Link to={'/login'} className="text-blue-500 hover:text-blue-800 font-semibold" href="#">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
