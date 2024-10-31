import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

function Dashboard() {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Memuat Material Icons secara dinamis saat komponen di-render
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            localStorage.removeItem('token'); // Jika menggunakan token-based authentication
            navigate('/login');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-white shadow-lg p-6">
                <h1 className="text-2xl font-bold text-blue-600">Finance</h1>
                <nav className="mt-8">
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center space-x-2">
                            <span className="material-icons">dashboard</span>
                            <span>Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="material-icons">apps</span>
                            <span>Applications</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="material-icons">widgets</span>
                            <span>Widgets</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="material-icons">insert_chart</span>
                            <span>Charts</span>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>
                    <div className="flex items-center space-x-4 relative">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="px-4 py-2 border rounded-lg"
                        />
                        <div className="flex items-center space-x-2">
                            <span className="material-icons text-gray-500">notifications</span>
                            <div className="relative">
                                <img
                                    src="https://via.placeholder.com/32"
                                    alt="User"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                    onClick={toggleDropdown}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-500 rounded-lg shadow-lg text-white">
                        <h3 className="text-lg">Total Income</h3>
                        <p className="text-2xl font-bold">$579,000</p>
                        <p className="text-sm">Saved 25%</p>
                    </div>
                    <div className="p-6 bg-purple-500 rounded-lg shadow-lg text-white">
                        <h3 className="text-lg">Cash on Hand</h3>
                        <p className="text-2xl font-bold">$92,000</p>
                        <p className="text-sm">Saved 25%</p>
                    </div>
                    <div className="p-6 bg-green-500 rounded-lg shadow-lg text-white">
                        <h3 className="text-lg">Net Profit Margin</h3>
                        <p className="text-2xl font-bold">$179,000</p>
                        <p className="text-sm">Saved 65%</p>
                    </div>
                </div>

                {/* Charts and Reports */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-gray-800">Monthly Data</h4>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
