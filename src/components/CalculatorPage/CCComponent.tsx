import React, { useEffect, useState } from 'react';
import { Box, Text } from '@mantine/core';
import { useUser } from './UserContext'; // Ensure this path is correct
import { UNIVERSITY_CLASSES } from 'C:/Users/benja/CourseSwap3/src/constants/universityClasses'; // Ensure this path is correct

const CCComponent: React.FC = () => {
  const { user } = useUser();
  const [associatedCollege, setAssociatedCollege] = useState<string>('Loading...');

  useEffect(() => {
    if (user?.university) {
      const universityClasses = UNIVERSITY_CLASSES[user.university] || [];
      const communityCollegeClasses = universityClasses.filter(
        (course) => !course.isOneCredit
      );
      if (communityCollegeClasses.length > 0) {
        setAssociatedCollege(communityCollegeClasses[0].associatedCollege);
      } else {
        setAssociatedCollege('No community college found');
      }
    } else {
      setAssociatedCollege('No university selected');
    }
  }, [user]);

  return (
    <Box
      style={{
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '3px solid #ccc', // Thicker gray border
        padding: '1.5rem', // Increased padding
        backgroundColor: 'white',
        height: '150px', // Adjust height as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center the text horizontally
      }}
    >
      <Text size="lg" fw={700} style={{ lineHeight: '1.4', fontSize: '1.5rem' }}>
        {associatedCollege}
      </Text>
    </Box>
  );
};

export default CCComponent;
