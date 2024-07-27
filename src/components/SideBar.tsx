import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mantine/core';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface SidebarProps {
  isSidebarOpen: boolean;
  handleSidebarToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, handleSidebarToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const accountActive = ['/account', '/profile-sign-in', '/student-profile-page'].includes(location.pathname);
  const dashboardActive = location.pathname === '/price-comparison';

  const handleSignOut = () => {
    localStorage.removeItem('authToken'); // Remove the auth token from local storage
    navigate('/auth'); // Redirect to the auth page
  };

  return (
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
            to="/price-comparison"
            className={dashboardActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'}
          >
            <DashboardIcon />
            {isSidebarOpen && <span>Dashboard</span>}
          </NavLink>
          <NavLink
            to="/account"
            className={accountActive ? 'flex items-center space-x-2 bg-gray-200 p-2 w-full' : 'flex items-center space-x-2 p-2 w-full'}
          >
            <AccountCircleIcon />
            {isSidebarOpen && <span>CourseSwap Account</span>}
          </NavLink>
        </Box>
      </div>
      <div onClick={handleSignOut} className="flex items-center space-x-2 p-2 w-full cursor-pointer">
        <ExitToAppIcon />
        {isSidebarOpen && <span>Sign Out</span>}
      </div>
    </Box>
  );
};

export default Sidebar;
