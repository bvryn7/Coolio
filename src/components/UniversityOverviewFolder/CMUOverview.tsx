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
import GavelIcon from '@mui/icons-material/Gavel';
import LanguageIcon from '@mui/icons-material/Language';
import BookIcon from '@mui/icons-material/Book';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const iconStyles = {
  fontSize: '24px',
  right: '-70px' // Move icons further to the right
};

const CMUOverview: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const categories = [
    {
      title: 'Competencies',
      requirements: [
        { id: 5, requirement_name: 'Written English Competency', credits_required: 6, icon: <SchoolIcon style={{ ...iconStyles, color: '#FB7185' }} />, color: 'bg-red-400' },
        { id: 6, requirement_name: 'Oral English Competency', credits_required: 3, icon: <AccountCircleIcon style={{ ...iconStyles, color: '#60A5FA' }} />, color: 'bg-blue-400' },
        { id: 7, requirement_name: 'Mathematics Competency', credits_required: 4, icon: <CalculateIcon style={{ ...iconStyles, color: '#A78BFA' }} />, color: 'bg-purple-400' },
        { id: 8, requirement_name: 'Writing Intensive Requirement', credits_required: 6, icon: <FitnessCenterIcon style={{ ...iconStyles, color: '#FB923C' }} />, color: 'bg-orange-400' },
        { id: 9, requirement_name: 'Quantitative Reasoning Requirement', credits_required: 3, icon: <ScienceIcon style={{ ...iconStyles, color: '#34D399' }} />, color: 'bg-green-400' },
      ],
    },
    {
      title: 'Group I: Humanities',
      requirements: [
        { id: 1, requirement_name: 'Humanities', credits_required: 6, icon: <BookIcon style={{ ...iconStyles, color: '#F87171' }} />, color: 'bg-red-300' },
      ],
    },
    {
      title: 'Group II: Natural Sciences',
      requirements: [
        { id: 2, requirement_name: 'Natural Sciences', credits_required: 8, icon: <PsychologyIcon style={{ ...iconStyles, color: '#60A5FA' }} />, color: 'bg-blue-300' },
      ],
    },
    {
      title: 'Group III: Social Sciences',
      requirements: [
        { id: 3, requirement_name: 'Social Sciences', credits_required: 8, icon: <PublicIcon style={{ ...iconStyles, color: '#4ADE80' }} />, color: 'bg-green-300' },
      ],
    },
    {
      title: 'Group IV: Studies in Discrimination',
      requirements: [
        { id: 4, requirement_name: 'Discrimination Studies', credits_required: 6, icon: <GavelIcon style={{ ...iconStyles, color: '#FCD34D' }} />, color: 'bg-yellow-300' },
      ],
    },
  ];

  const CreditBar: React.FC<{ req: any }> = ({ req }) => (
    <Box className="flex flex-col items-center mx-4 my-2">
      <span className="text-gray-800 text-sm mb-2">{req.credits_required} credits</span>
      <Box
        className={`relative flex flex-col justify-end items-center ${req.color} border-4 border-gray-600 w-16 rounded-lg transform hover:scale-105 transition-transform duration-300`}
        style={{ height: `${req.credits_required * 30}px` }}
      >
        <Box className="absolute right-[-70px] top-1/2 transform -translate-y-1/2">
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
          <h1 className="text-4xl font-bold mb-12">CMU Overview</h1>
          <p className="text-lg mb-12">
            Central Michigan University allows you to transfer up to 64 credits from community college, including General Education requirements, if they are equivalent to CMU's courses.
          </p>

          {categories.map((category, catIndex) => (
            <React.Fragment key={catIndex}>
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              {/* Ensure the container aligns at the bottom */}
              <Box className="flex flex-wrap justify-center gap-8 mb-12 items-end">
                {category.requirements.map((req) => (
                  <CreditBar key={req.id} req={req} />
                ))}
              </Box>
            </React.Fragment>
          ))}

          <Box className="mt-12">
            <NextPrev nextLink="/student-progress" prevLink="/student-profile" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CMUOverview;