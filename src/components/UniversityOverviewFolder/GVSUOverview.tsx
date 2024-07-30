import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SimpleWhiteHeader from '../SimpleWhiteHeader';
import ProgressBar from '../ProgressBar';
import NextPrev from '../NextPrev';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import PaletteIcon from '@mui/icons-material/Palette';
import CalculateIcon from '@mui/icons-material/Calculate';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PublicIcon from '@mui/icons-material/Public';

const GVSUOverview: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const requirements = [
    { id: 1, requirement_name: 'Humanities', credits_required: 3, icon: <SchoolIcon />, color: 'bg-red-300' },
    { id: 2, requirement_name: 'Earth Science', credits_required: 3, icon: <PublicIcon />, color: 'bg-green-300' },
    { id: 3, requirement_name: 'Natural Science', credits_required: 3, icon: <ScienceIcon />, color: 'bg-blue-300' },
    { id: 4, requirement_name: 'Arts', credits_required: 3, icon: <PaletteIcon />, color: 'bg-yellow-300' },
    { id: 5, requirement_name: 'Quantitative', credits_required: 3, icon: <CalculateIcon />, color: 'bg-purple-300' },
    { id: 6, requirement_name: 'Physical Science', credits_required: 3, icon: <FitnessCenterIcon />, color: 'bg-orange-300' },
  ];

  return (
    <Box className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Box
        className={`transition-all duration-300 ease-in-out transform ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } flex flex-col justify-between p-4 border-r border-gray-200`}
        style={{ backgroundColor: '#FFF7D6', minHeight: '100vh' }}
      >
        <div className="flex-grow">
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
              to="/price-comparison"
              className={({ isActive }) =>
                isActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'
              }
            >
              <DescriptionIcon />
              {isSidebarOpen && <span>Dashboard</span>}
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
        <div className="mt-auto">
          <NavLink
            to="/auth"
            onClick={() => localStorage.removeItem('authToken')}
            className={({ isActive }) =>
              isActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'
            }
          >
            <ExitToAppIcon />
            {isSidebarOpen && <span>Sign Out</span>}
          </NavLink>
        </div>
      </Box>

      {/* Main content */}
      <Box className="flex-1 flex flex-col bg-white">
        <SimpleWhiteHeader />
        <ProgressBar />
        <Box className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">GVSU Overview</h1>
          <p className="text-center">Welcome to the Grand Valley State University Overview page!</p>
          
          {/* Add vertical bars */}
          <Box className="flex space-x-8 mt-8 justify-center items-end">
            {requirements.map((req) => (
              <Box key={req.id} className="flex flex-col items-center">
                <span className="text-gray-800 text-sm mb-2">{req.credits_required} credits</span>
                <Box className={`relative flex flex-col justify-end items-center ${req.color} border-4 border-gray-600 h-64 w-10 rounded-lg transform hover:scale-105 transition-transform duration-300`}>
                  {req.icon}
                  {Array.from({ length: 5 }, (_, i) => (
                    <Box key={i} className="w-full border-t-2 border-black" style={{ height: '20%' }}></Box>
                  ))}
                </Box>
                <span className="text-gray-800 text-lg mt-2 flex items-center">{req.requirement_name}</span>
              </Box>
            ))}
          </Box>
          <NextPrev nextLink="/student-progress" prevLink="/student-profile" />
        </Box>
      </Box>
    </Box>
  );
};

export default GVSUOverview;
