// src/components/CalculatorPage/UniversityList.tsx

// Comment out the entire content if you don't need it for now
/*
import React, { useEffect, useState } from 'react';
import { getUniversities } from '../../services/universityService';

interface University {
  university_id: number;
  name: string;
  state: string;
  hex_code: string;
}

const UniversityList: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (err) {
        setError('Failed to fetch universities');
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div>
      <h1>Universities</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {universities.map((university) => (
          <li key={university.university_id}>
            {university.name} ({university.state})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;
*/

// Add this to ensure it's treated as a module
export {};
