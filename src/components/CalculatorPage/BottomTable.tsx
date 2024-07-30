import React, { useState } from 'react';
import { Box, Table, Button } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

const BottomTable: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  const handleRemoveRow = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <Box
      style={{
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ccc',
        marginTop: '2rem',
        paddingBottom: '1rem',
        backgroundColor: '#fff',
        transition: 'transform 0.2s ease-in-out',
      }}
      className="hover-effect"
    >
      <Table striped highlightOnHover style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#e0f7fa', borderBottom: '2px solid #ccc' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Original Course (Western Michigan University)
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Gen Ed Requirement
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Credits
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Original Price
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Equivalent Course
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Community College
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              New Price
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Online
            </th>
            <th style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ textAlign: 'left', padding: '12px', borderRight: '1px solid #ccc' }}>
                <select
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  <option value="" disabled selected>Select Course</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
              </td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>
                <select
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                  <option value="" disabled selected>Select Requirement</option>
                  <option value="requirement1">Requirement 1</option>
                  <option value="requirement2">Requirement 2</option>
                  <option value="requirement3">Requirement 3</option>
                </select>
              </td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>3</td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>$1000</td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>Equivalent Course</td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>Community College Name</td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>$500</td>
              <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>Yes</td>
              <td style={{ textAlign: 'center', padding: '12px' }}>
                <Button variant="subtle" color="red" size="xs" onClick={() => handleRemoveRow(row.id)}>
                  <IconTrash size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Box style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Button variant="light" color="green" onClick={handleAddRow}>
          + Add New Row
        </Button>
      </Box>
    </Box>
  );
};

export default BottomTable;