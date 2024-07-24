import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Container, Card, Button } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SimpleWhiteHeader from './SimpleWhiteHeader'; // Correct path to the SimpleWhiteHeader component
import HomeMainContent from './HomeMainContent';
import HomeGetStartedCard from './HomeGetStartedCard'; // Import the new component

const HomePage: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);
  const userName = "Benjamin"; // Replace with dynamic user name as needed

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Box
        className={`transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } flex flex-col justify-between p-4 border-r border-gray-200`}
        style={{ backgroundColor: '#FFF7D6', minHeight: '100vh' }}
      >
        <div>
          <Button onClick={handleSidebarToggle} className="mb-4">
            <MenuOpenIcon />
          </Button>
          <Box className="flex flex-col space-y-4">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'
              }
            >
              <HomeIcon />
              {isSidebarOpen && <span>Home</span>}
            </NavLink>
            <NavLink
              to="/documents"
              className={({ isActive }) =>
                isActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'
              }
            >
              <DescriptionIcon />
              {isSidebarOpen && <span>Documents</span>}
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'
              }
            >
              <AccountCircleIcon />
              {isSidebarOpen && <span>CourseSwap Account</span>}
            </NavLink>
          </Box>
        </div>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'
          }
        >
          <ExitToAppIcon />
          {isSidebarOpen && <span>Sign Out</span>}
        </NavLink>
      </Box>

      {/* Main content */}
      <Box className="flex-1 flex flex-col bg-white">
        <SimpleWhiteHeader /> {/* Include the updated SimpleWhiteHeader component */}
        <HomeMainContent userName={userName} /> {/* Include HomeMainContent component */}
        <HomeGetStartedCard /> {/* Include HomeGetStartedCard component */}
      </Box>
    </Box>
  );
};

export default HomePage;
