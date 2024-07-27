import React, { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import SimpleWhiteHeader from './SimpleWhiteHeader';
import Sidebar from './SideBar'; // Ensure correct path
import AccountMainContent from './AccountMainContent'; // Import Account main content

const Account: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box className="min-h-screen flex bg-white">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
      <Box className="flex-1 flex flex-col bg-white">
        <SimpleWhiteHeader />
        <AccountMainContent />
      </Box>
    </Box>
  );
};

export default Account;
