
// src/components/CommunityCollegeList.tsx
import React, { useEffect, useState } from 'react';
import { getCommunityColleges } from '../../services/communityCollegeService';

interface CommunityCollege {
  cc_id: number;
  name: string;
  state: string;
  hex_code: string;
}

const CommunityCollegeList: React.FC = () => {
  const [communityColleges, setCommunityColleges] = useState<CommunityCollege[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCommunityColleges = async () => {
      try {
        const data = await getCommunityColleges();
        setCommunityColleges(data);
      } catch (err) {
        setError('Failed to fetch community colleges');
      }
    };

    fetchCommunityColleges();
  }, []);

  return (
    <div>
      <h1>Community Colleges</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {communityColleges.map((college) => (
          <li key={college.cc_id}>
            {college.name} ({college.state})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityCollegeList;