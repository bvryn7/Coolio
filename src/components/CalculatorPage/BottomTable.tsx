// src/components/BottomTable.tsx
import React, { useState, useEffect } from 'react';
import { Box, Table, Button, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { CMU_CLASSES } from './Cmuholder'; // Ensure this path is correct
import { useUser } from '../UserContext'; // Ensure this path is correct

const BottomTable: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    if (user?.university === 'Central Michigan University') {
      setClasses(CMU_CLASSES);
    } else {
      setClasses([]); // Or set other university classes here
    }
  }, [user]);

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), courseId: '', genEdRequirement: '', credits: 0, online: false }]);
    setError(null);
  };

  const handleRemoveRow = (id: number) => {
    const rowToRemove = rows.find(row => row.id === id);
    setRows(rows.filter(row => row.id !== id));
    setTotalCredits(totalCredits - rowToRemove.credits);
    setError(null);
  };

  const handleCourseChange = (id: number, courseId: string) => {
    const selectedCourse = classes.find(course => course.id === courseId);
    if (selectedCourse) {
      const newRowState = rows.map(row => {
        if (row.id === id) {
          return {
            ...row,
            courseId: selectedCourse.courseId,
            genEdRequirement: selectedCourse.genEdRequirement,
            credits: selectedCourse.credits,
            online: selectedCourse.online,
          };
        }
        return row;
      });
      setRows(newRowState);
      setTotalCredits(newRowState.reduce((sum, row) => sum + row.credits, 0));
      setError(null);
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
        backgroundColor: 'transparent', // Set background to transparent
        transition: 'transform 0.2s ease-in-out',
        height: '750px', // Set height to 750 pixels
      }}
      className="hover-effect"
    >
      <Box style={{ textAlign: 'left', marginTop: '1rem', marginLeft: '1rem' }}>
        <Button variant="light" color="green" onClick={handleAddRow}>
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
              Original Course (Central Michigan University)
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
                  value={row.courseId}
                  onChange={(e) => handleCourseChange(row.id, e.target.value)}
                >
                  <option value="" disabled>Select Course</option>
                  {classes.map((course) => (
                    <option key={course.id} value={course.id}>{course.name}</option>
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
                  value={row.credits}
                  readOnly
                  style={{ width: '100%', padding: '8px', border: 'none', background: 'transparent', outline: 'none' }}
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
