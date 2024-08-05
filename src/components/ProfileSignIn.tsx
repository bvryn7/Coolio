import React, { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import SimpleWhiteHeader from './SimpleWhiteHeader';
import Sidebar from './SideBar'; // Ensure the correct path
import BackButton from './BackButton'; // Import BackButton component
import { useNavigate } from 'react-router-dom';
import { useUser } from './CalculatorPage/UserContext'; // Import UserContext

const ProfileSignIn: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);
  const { user, setUser } = useUser();
  const [email, setEmail] = useState(user?.email || ''); // Default to empty string if user is null
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Make an API call to update the user's sign-in information
    const response = await fetch('/api/update-signin-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (response.ok) {
      const updatedUser = await response.json();
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Persist user in local storage
      alert('Sign-in information updated successfully!');
    } else {
      alert('Failed to update sign-in information. Please try again.');
    }
  };

  return (
    <Box className="min-h-screen flex bg-white">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
      <Box className="flex-1 flex flex-col bg-white">
        <SimpleWhiteHeader />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Sign in & Security</h1>
          <div className="bg-white shadow-md rounded-lg p-6 border-2 border-[#003478] max-w-xl mx-0"> {/* Adjusted max-w-xl and mx-0 */}
            <h2 className="text-2xl font-semibold mb-4">Manage your sign-in information and security settings</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your new email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Sign-In Info
              </button>
            </form>
          </div>
          <BackButton prevLink="/account" /> {/* Add the BackButton component */}
        </div>
      </Box>
    </Box>
  );
};

export default ProfileSignIn;