// CourseTable.tsx
import React from 'react';
import { Box, Table } from '@mantine/core';

const CourseTable: React.FC = () => {
  return (
    <Box
      style={{
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ccc'
      }}
    >
      <Table striped highlightOnHover style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#e0f7fa', borderBottom: '2px solid #ccc' }}>
          <tr>
            <th style={{ textAlign: 'left', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Western Michigan University Course
            </th>
            <th style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc', fontWeight: 'bold' }}>
              Credits
            </th>
            <th style={{ textAlign: 'center', padding: '12px', fontWeight: 'bold' }}>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <td style={{ textAlign: 'left', padding: '12px', borderRight: '1px solid #ccc' }}>Water and Society</td>
            <td style={{ textAlign: 'center', padding: '12px', borderRight: '1px solid #ccc' }}>1</td>
            <td style={{ textAlign: 'center', padding: '12px' }}>$0.00</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
};

export default CourseTable;