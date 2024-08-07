import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import CourseTable from './CourseTable';
import BottomTable from './BottomTable';
import SideBar from 'C:/Users/benja/CourseSwap3/src/components/SideBar';
import SimpleWhiteHeader from 'C:/Users/benja/CourseSwap3/src/components/SimpleWhiteHeader';
import TransferMaxCombinedSchedule from './TransferMaxCombinedSchedule'; // Import the minimal component
import { ClassCostProvider } from './ClassCostContext'; // Import ClassCostProvider

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
    <ClassCostProvider>
      <div style={{ display: 'flex' }}>
        <SideBar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <SimpleWhiteHeader />
          <div style={{ 
            flex: 1, 
            padding: '20px', 
            backgroundColor: 'white', 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'flex-start',
            position: 'relative'
          }}>
            <div style={{ flex: 1, marginRight: '320px' }}> {/* Add margin to the right to make space for the fixed component */}
              <Box mt="lg" style={{ width: '100%', marginBottom: '2rem', boxShadow: 'none' }}>
                <CourseTable />
              </Box>
              <Box mt="lg" style={{ width: '100%', marginBottom: '2rem', boxShadow: 'none' }}>
                <BottomTable />
              </Box>
            </div>
            <TransferMaxCombinedSchedule /> {/* Integrate the minimal component */}
          </div>
        </div>
      </div>
    </ClassCostProvider>
  );
};

export default PriceComparison;
