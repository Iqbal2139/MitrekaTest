import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            console.log(response.data);
            // Redirect ke halaman beranda jika login berhasil
            navigate('/home');
        } catch (error) {
            console.error(error);
            // Tampilkan pesan error jika login gagal
            setError(error.response?.data?.message || "Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="flex min-h-screen bg-blue-500">
            {/* Left Side */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-400 p-10 flex-col justify-center rounded-l-lg text-center">
                <h1 className="text-4xl font-bold text-white">Mitreka Finance</h1>
                <p className="mt-4 text-lg text-blue-100">
                    Simple ERP Finance To Use
                </p>
            </div>

            {/* Right Side */}
            <div className="flex w-full lg:w-1/2 bg-white p-8 md:p-16 items-center justify-center rounded-r-lg">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-semibold text-gray-800">Hello Again!</h2>
                    <p className="mt-2 text-sm text-gray-500">Welcome Back</p>
                    
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>

                    <div className="flex justify-between mt-4 text-sm text-gray-600">
                        <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
                        <Link to="/register" className="hover:underline">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
