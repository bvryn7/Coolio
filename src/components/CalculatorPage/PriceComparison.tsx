import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import CourseTable from './CourseTable';
import BottomTable from './BottomTable';
import WhiteCardTwo from './WhiteCardTwo'; // Import the renamed component
import SideBar from 'C:/Users/benja/CourseSwap3/src/components/SideBar';
import SimpleWhiteHeader from 'C:/Users/benja/CourseSwap3/src/components/SimpleWhiteHeader';
import TransferMaxCombinedSchedule from './TransferMaxCombinedSchedule';

const PriceComparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <SideBar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <SimpleWhiteHeader />
        <div style={{ flex: 1, padding: '20px', backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <div style={{ flex: '3 3 0%' }}>
            {/* Ensure the tables take full width and are flush */}
            <Box mt="lg" style={{ width: '100%', marginBottom: '2rem', boxShadow: 'none' }}>
              <CourseTable />
            </Box>
            <Box mt="lg" style={{ width: '100%', marginBottom: '2rem', boxShadow: 'none' }}>
              <BottomTable />
            </Box>
          </div>
          <div style={{ flex: '2 2 0%', marginLeft: '20px' }}>
            <TransferMaxCombinedSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComparison;
