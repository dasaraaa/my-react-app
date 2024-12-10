import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem('authToken');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signin'); // Redirect to login page if the user is not logged in
    }
  }, [isLoggedIn, navigate]);

  // Logout functionality
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token on logout
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful',
      text: 'You have been logged out.',
    }).then(() => {
      navigate('/'); // Redirect to login page after logout
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <div className="text-2xl font-semibold mb-6">Dashboard</div>
        <ul>
          <li className="mb-4">
            <a href="/dashboard" className="hover:text-gray-400">Home</a>
          </li>
          <li className="mb-4">
            <a href="/profile" className="hover:text-gray-400">Profile</a>
          </li>
          <li className="mb-4">
            <a href="/settings" className="hover:text-gray-400">Settings</a>
          </li>
          <li className="mb-4">
            <button
              onClick={handleLogout}
              className="w-full text-left text-red-500 hover:text-red-400"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome to your Dashboard!</h1>
          <div className="text-gray-600">Hello, User</div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-gray-700">Total Users</div>
            <div className="text-2xl text-blue-500">120</div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-gray-700">Total Sales</div>
            <div className="text-2xl text-green-500">$45,000</div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="text-xl font-bold text-gray-700">New Orders</div>
            <div className="text-2xl text-yellow-500">30</div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="text-gray-600">Order #1243 placed by John</span>
              <span className="text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">User Jane signed up</span>
              <span className="text-gray-500">1 day ago</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-600">New comment on product #543</span>
              <span className="text-gray-500">3 days ago</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600">
          <p>&copy; 2024 Lylia Beauty. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
