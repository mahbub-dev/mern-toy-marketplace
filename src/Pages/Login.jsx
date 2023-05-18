import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { Link } from 'react-router-dom';
import app from '../../firebase.config';
const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // Handle successful Google login
                console.log('Google login successful:', result.user);
            })
            .catch((error) => {
                // Handle error during Google login
                console.error('Google login error:', error);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 md:w-[500px] rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <div className="flex items-center justify-between mb-6">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In

                        </button>
                        <p className="text-gray-700 text-sm">
                            Don't have an account?{' '}
                            <Link to={'/register'} className="text-blue-500 hover:text-blue-800 font-semibold" href="#">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="border-[2px] border-blue-500 hover:bg-blue-500 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleGoogleLogin}
                        >
                            Sign In with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
