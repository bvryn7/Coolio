import React, { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import SimpleWhiteHeader from './SimpleWhiteHeader';
import Sidebar from './SideBar'; // Ensure the correct path
import BackButton from './BackButton'; // Import BackButton component
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import UserContext

const StudentProfilePage: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [university, setUniversity] = useState(user.university || '');
  const [state, setState] = useState(user.state || '');
  const [grade, setGrade] = useState(user.grade || '');

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission to update user profile
    const updatedUser = {
      ...user,
      university,
      state,
      grade,
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser)); // Persist user in local storage
    alert('Profile information updated successfully!');
  };

  return (
    <Box className="min-h-screen flex bg-white">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
      <Box className="flex-1 flex flex-col bg-white">
        <SimpleWhiteHeader />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
          <div className="bg-white shadow-md rounded-lg p-6 border-2 border-[#003478] max-w-xl mx-0"> {/* Adjusted max-w-xl and mx-0 */}
            <h2 className="text-2xl font-semibold mb-4">Update your personal information</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="university">
                  University
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="university"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  required
                >
                  <option value="">Select your university</option>
                  {/* Add university options here */}
                  <option value="University A">University A</option>
                  <option value="University B">University B</option>
                  <option value="University C">University C</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                  State of Residence
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                >
                  <option value="">Select your state</option>
                  {/* Add state options here */}
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                  Grade
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                >
                  <option value="">Select your grade</option>
                  {/* Add grade options here */}
                  <option value="Freshman">Freshman</option>
                  <option value="Sophomore">Sophomore</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Profile Info
              </button>
            </form>
          </div>
          <BackButton prevLink="/account" /> {/* Add the BackButton component */}
        </div>
      </Box>
    </Box>
  );
};

export default StudentProfilePage;
