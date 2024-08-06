import React, { useState, useEffect } from 'react';
import { Box, Table, Button, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useUser } from './UserContext'; // Ensure this path is correct
import { UNIVERSITY_CLASSES } from 'C:/Users/benja/CourseSwap3/src/constants/universityClasses'; // Ensure this path is correct

interface Course {
  universityName: string;
  associatedCollege: string;
  genEdRequirement: string;
  universityCredits: number;
  collegeCredits: number;
  online: boolean;
  universityCourse: string;
  collegeCourse: string;
  universityId: string;
  collegeId: string;
  isOneCredit: boolean;
  collegePriceInDistrict: number;
  collegePriceInState: number;
  collegePriceOutState: number;
  universityCostInState: number;
  universityCostOutOfState: number;
  universityCostInternational: number;
  universityFullCostInState: number;
  universityFullCostOutState: number;
  universityFullCostInternational: number;
}

interface Row {
  id: number;
  collegeId: string;
  genEdRequirement: string;
  collegeCredits: number;
  online: boolean;
}

const BottomTable: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();
  const [classes, setClasses] = useState<Course[]>([]);
  const [associatedCollege, setAssociatedCollege] = useState<string>('Loading...');
  const creditLimit = 17;

  useEffect(() => {
    if (user?.university) {
      const universityClasses = UNIVERSITY_CLASSES[user.university] || [];
      const communityCollegeClasses = universityClasses.filter(
        (course) => course.associatedCollege === 'Grand Rapids Community College'
      );
      setClasses(communityCollegeClasses);
      if (communityCollegeClasses.length > 0) {
        setAssociatedCollege(communityCollegeClasses[0].associatedCollege);
      }
    } else {
      setClasses([]);
    }
  }, [user]);

  useEffect(() => {
    const total = rows.reduce((sum, row) => sum + row.collegeCredits, 0);
    setTotalCredits(total);
    if (total > creditLimit) {
      setError(`Cannot add more than ${creditLimit} credits.`);
    } else {
      setError(null);
    }
  }, [rows]);

  const handleAddRow = () => {
    if (totalCredits >= creditLimit) {
      setError(`Cannot add more than ${creditLimit} credits.`);
      return;
    }
    setRows([...rows, { id: Date.now(), collegeId: '', genEdRequirement: '', collegeCredits: 0, online: false }]);
  };

  const handleRemoveRow = (id: number) => {
    const rowToRemove = rows.find((row) => row.id === id);
    if (rowToRemove) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const handleCourseChange = (id: number, collegeId: string) => {
    const selectedCourse = classes.find((course) => course.collegeId === collegeId);
    if (selectedCourse) {
      const newRowState = rows.map((row) => {
        if (row.id === id) {
          return {
            ...row,
            collegeId: selectedCourse.collegeId,
            genEdRequirement: selectedCourse.genEdRequirement,
            collegeCredits: selectedCourse.collegeCredits,
            online: selectedCourse.online,
          };
        }
        return row;
      });
      setRows(newRowState);
    }
  };

  return (
    <Box
      style={{
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '3px solid #ccc', // Thicker gray border
        marginTop: '2rem',
        paddingBottom: '1rem',
        backgroundColor: totalCredits >= creditLimit ? 'lightgray' : 'transparent', // Set background to light gray if limit reached
        transition: 'transform 0.2s ease-in-out',
        height: '750px', // Set height to 750 pixels
      }}
      className="hover-effect"
    >
      <Box style={{ textAlign: 'left', marginTop: '1rem', marginLeft: '1rem' }}>
        <Button variant="light" color="green" onClick={handleAddRow} disabled={totalCredits >= creditLimit}>
          + Add New Class
        </Button>
        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}
      </Box>
      <Table striped highlightOnHover style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead style={{ backgroundColor: '#e0f7fa', borderBottom: '2px solid #ccc' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '24px', borderRight: '1px solid transparent', fontWeight: 'bold' }}>
              {associatedCollege}
            </th>
            <th style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent', fontWeight: 'bold' }}>
              Gen Ed Requirement
            </th>
            <th style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent', fontWeight: 'bold' }}>
              Credits
            </th>
            <th style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent', fontWeight: 'bold' }}>
              Online
            </th>
            <th style={{ textAlign: 'center', padding: '24px', fontWeight: 'bold' }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid transparent' }}>
              <td style={{ textAlign: 'left', padding: '24px', borderRight: '1px solid transparent' }}>
                <select
                  style={{ width: '100%', padding: '8px', border: 'none', background: 'transparent', outline: 'none' }}
                  value={row.collegeId}
                  onChange={(e) => handleCourseChange(row.id, e.target.value)}
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  {classes.map((course) => (
                    <option key={course.collegeId} value={course.collegeId}>
                      {course.collegeCourse} ({course.collegeId})
                    </option>
                  ))}
                </select>
              </td>
              <td style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent' }}>
                <input
                  type="text"
                  value={row.genEdRequirement}
                  readOnly
                  style={{ width: '100%', padding: '8px', border: 'none', background: 'transparent', outline: 'none' }}
                />
              </td>
              <td style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent' }}>
                <input
                  type="text"
                  value={row.collegeCredits}
                  readOnly
                  style={{ width: '100%', padding: '8px', border: 'none', background: 'transparent', outline: 'none', textAlign: 'center' }}
                />
              </td>
              <td style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent' }}>
                {row.online ? 'Yes' : 'No'}
              </td>
              <td style={{ textAlign: 'center', padding: '24px' }}>
                <Button variant="subtle" color="red" size="xs" onClick={() => handleRemoveRow(row.id)}>
                  <IconTrash size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default BottomTable;
