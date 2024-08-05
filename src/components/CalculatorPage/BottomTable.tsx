// src/components/BottomTable.tsx
import React, { useState } from 'react';
import { Box, Table, Button, Text } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const BottomTable: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleAddRow = () => {
    if (totalCredits + 3 > 18) {
      setError('Cannot add more than 18 credits.');
      return;
    }
    setRows([...rows, { id: Date.now(), credits: 3 }]);
    setTotalCredits(totalCredits + 3);
    setError(null);
  };

  const handleRemoveRow = (id: number) => {
    const rowToRemove = rows.find(row => row.id === id);
    setRows(rows.filter(row => row.id !== id));
    setTotalCredits(totalCredits - rowToRemove.credits);
    setError(null);
  };

  const handleCreditsChange = (id: number, credits: number) => {
    const newRowState = rows.map(row => {
      if (row.id === id) {
        const difference = credits - row.credits;
        if (totalCredits + difference > 18) {
          setError('Cannot exceed 18 credits.');
          return row;
        }
        setTotalCredits(totalCredits + difference);
        return { ...row, credits };
      }
      return row;
    });
    setRows(newRowState);
    setError(null);
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
              Original Course (Western Michigan University)
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
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  <option value="" disabled selected>Select Course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
              </td>
              <td style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent' }}>
                <select
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  <option value="" disabled selected>Select Requirement</option>
                  <option value="requirement1">Requirement 1</option>
                  <option value="requirement2">Requirement 2</option>
                  <option value="requirement3">Requirement 3</option>
                </select>
              </td>
              <td style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent' }}>
                <input
                  type="number"
                  min="1"
                  max="18"
                  value={row.credits}
                  onChange={(e) => handleCreditsChange(row.id, parseInt(e.target.value))}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </td>
              <td style={{ textAlign: 'center', padding: '24px', borderRight: '1px solid transparent' }}>Yes</td>
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
