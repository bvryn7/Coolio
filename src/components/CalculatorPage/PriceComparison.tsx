import React, { useEffect, useState } from 'react';
import { Box, Text } from '@mantine/core';
import CourseTable from './CourseTable';
import BottomTable from './BottomTable';
import WhiteCardTwo from './WhiteCardTwo'; // Import the renamed component

const PriceComparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="p-6 flex flex-col items-center hover-effect" style={{ minHeight: '1030px', width: 'calc(100% * 19 / 20)', backgroundColor: 'white', margin: '0 auto -10px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s ease-in-out' }}>
        
        <WhiteCardTwo isVisible={isVisible} />  {/* Use the renamed component here */}
        
        <Box mt="lg" className="hover-effect" style={{ textAlign: 'center', width: '100%', marginTop: '2rem', paddingTop: '3rem', backgroundColor: 'white', maxWidth: '1000px', margin: '0 auto', borderRadius: '20px', transition: 'transform 0.2s ease-in-out' }}>
          <Text size="xl" style={{ fontWeight: 700 }}>
            TransferMax Semester Schedule Combined
          </Text>
        </Box>

        <Box mt="lg" className="hover-effect" style={{ textAlign: 'center', width: '100%', marginTop: '2rem', paddingTop: '3rem', backgroundColor: 'white', maxWidth: '1000px', margin: '0 auto', borderRadius: '20px', transition: 'transform 0.2s ease-in-out' }}>
          <Text size="xl" style={{ fontWeight: 700 }}>
            University Course [ Retain Active Student Status ]
          </Text>
        </Box>

        <Box mt="lg" className="hover-effect" style={{ paddingTop: '3rem', width: '100%', backgroundColor: 'white', maxWidth: '1000px', margin: '0 auto', borderRadius: '20px', transition: 'transform 0.2s ease-in-out' }}>
          <CourseTable />
        </Box>

        <Box mt="lg" className="hover-effect" style={{ textAlign: 'center', width: '100%', marginTop: '2rem', paddingTop: '3rem', backgroundColor: 'white', maxWidth: '1000px', margin: '0 auto', borderRadius: '20px', transition: 'transform 0.2s ease-in-out' }}>
          <Text size="xl" style={{ fontWeight: 700 }}>
            Guest Student Transfer Courses [ Save Money ]
          </Text>
        </Box>

        <Box mt="lg" className="hover-effect" style={{ paddingTop: '3rem', width: '100%', backgroundColor: 'white', maxWidth: '1000px', margin: '0 auto', borderRadius: '20px', transition: 'transform 0.2s ease-in-out' }}>
          <BottomTable />
        </Box>
      </div>
    </div>
  );
};

export default PriceComparison;