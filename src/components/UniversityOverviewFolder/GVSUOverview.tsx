
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
import PaletteIcon from '@mui/icons-material/Palette';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BookIcon from '@mui/icons-material/Book';
import HistoryIcon from '@mui/icons-material/History';
import LanguageIcon from '@mui/icons-material/Language';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CreateIcon from '@mui/icons-material/Create';
import CommentIcon from '@mui/icons-material/Comment';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

interface Requirement {
  id: number;
  requirement_name: string;
  credits_required: number;
  icon: React.ReactElement;
  color: string;
}

const iconStyles = {
  fontSize: '20px',
  right: '-35px' // Move icons further to the right
};

const GVSUOverview: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const requirements: Requirement[] = [
    { id: 1, requirement_name: 'Arts', credits_required: 3, icon: <PaletteIcon style={{ ...iconStyles, color: '#F87171' }} />, color: 'bg-red-300' },
    { id: 2, requirement_name: 'Historical Perspectives', credits_required: 3, icon: <HistoryIcon style={{ ...iconStyles, color: '#86EFAC' }} />, color: 'bg-green-300' },
    { id: 3, requirement_name: 'Mathematical Sciences', credits_required: 3, icon: <CalculateIcon style={{ ...iconStyles, color: '#60A5FA' }} />, color: 'bg-blue-300' },
    { id: 4, requirement_name: 'Physical Sciences', credits_required: 4, icon: <FitnessCenterIcon style={{ ...iconStyles, color: '#FCD34D' }} />, color: 'bg-yellow-300' },
    { id: 5, requirement_name: 'Life Sciences', credits_required: 4, icon: <ScienceIcon style={{ ...iconStyles, color: '#D8B4FE' }} />, color: 'bg-purple-300' },
    { id: 6, requirement_name: 'Philosophy and Literature', credits_required: 3, icon: <BookIcon style={{ ...iconStyles, color: '#FDBA74' }} />, color: 'bg-orange-300' },
    { id: 7, requirement_name: 'Social and Behavioral Sciences', credits_required: 6, icon: <PeopleIcon style={{ ...iconStyles, color: '#F472B6' }} />, color: 'bg-pink-300' },
    { id: 8, requirement_name: 'World Perspectives', credits_required: 3, icon: <LanguageIcon style={{ ...iconStyles, color: '#5EEAD4' }} />, color: 'bg-teal-300' },
    { id: 9, requirement_name: 'U.S. Diversity', credits_required: 3, icon: <Diversity3Icon style={{ ...iconStyles, color: '#67E8F9' }} />, color: 'bg-cyan-300' },
    { id: 10, requirement_name: 'Health and Wellness', credits_required: 3, icon: <HealthAndSafetyIcon style={{ ...iconStyles, color: '#BBF7D0' }} />, color: 'bg-lime-300' },
    { id: 11, requirement_name: 'Foundations - Writing', credits_required: 3, icon: <CreateIcon style={{ ...iconStyles, color: '#FB7185' }} />, color: 'bg-red-400' },
    { id: 12, requirement_name: 'Foundations - Oral Communication', credits_required: 3, icon: <CommentIcon style={{ ...iconStyles, color: '#60A5FA' }} />, color: 'bg-blue-400' },
    { id: 13, requirement_name: 'Foundations - Information Literacy', credits_required: 3, icon: <InfoIcon style={{ ...iconStyles, color: '#34D399' }} />, color: 'bg-green-400' },
    { id: 14, requirement_name: 'Foundations - Critical Thinking', credits_required: 3, icon: <TipsAndUpdatesIcon style={{ ...iconStyles, color: '#FBBF24' }} />, color: 'bg-yellow-400' },
    { id: 15, requirement_name: 'Supplemental Writing Skills (SWS)', credits_required: 6, icon: <LocalLibraryIcon style={{ ...iconStyles, color: '#D8B4FE' }} />, color: 'bg-purple-400' },
  ];

  const CreditBar: React.FC<{ req: Requirement }> = ({ req }) => (
    <Box className="flex flex-col items-center mx-4 my-2">
      <span className="text-gray-800 text-sm mb-2">{req.credits_required} credits</span>
      <Box
        className={`relative flex flex-col justify-end items-center ${req.color} border-4 border-gray-600 w-12 rounded-lg transform hover:scale-105 transition-transform duration-300`}
        style={{ height: `${req.credits_required * 30}px` }}
      >
        <Box className="absolute right-[-35px] top-1/2 transform -translate-y-1/2">
          {req.icon}
        </Box>
        <Box className="flex flex-col justify-end items-center h-full w-full">
          {Array.from({ length: req.credits_required }, (_, i) => (
            <Box key={i} className="w-full border-t-2 border-black" style={{ height: '20%' }}></Box>
          ))}
        </Box>
      </Box>
      <span className="text-gray-800 text-base mt-2 text-center">{req.requirement_name}</span>
    </Box>
  );

  return (
    <Box className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <Box
        className={`transition-all duration-300 ease-in-out transform ${isSidebarOpen ? 'w-64' : 'w-16'} flex flex-col justify-between p-4 border-r border-gray-200`}
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
        <Box className="flex-grow p-8 text-center">
          <h1 className="text-4xl font-bold mb-12">GVSU Overview</h1>
          <p className="text-lg mb-12">
            Grand Valley State University allows you to transfer in up to 90 credits while completing your 4-year degree.
          </p>

          <Box className="grid grid-cols-3 gap-8 justify-center items-center">
            {requirements.map((req) => (
              <CreditBar key={req.id} req={req} />
            ))}
          </Box>
          
          <Box className="mt-12">
            <NextPrev nextLink="/student-progress" prevLink="/student-profile" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GVSUOverview;