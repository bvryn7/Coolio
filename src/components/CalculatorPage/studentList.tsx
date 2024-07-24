
// src/components/StudentList.tsx
import React, { useEffect, useState } from 'react';
import { getStudents } from '../../services/studentService';

interface Student {
  student_id: number;
  name: string;
  username: string;
  old_total_price: number;
  new_total_price: number;
  total_savings: number;
  district_status: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError('Failed to fetch students');
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.student_id}>
            {student.name} ({student.username}) - Old Price: ${student.old_total_price} - New Price: ${student.new_total_price} - Savings: ${student.total_savings} - Status: {student.district_status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;