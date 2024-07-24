
// src/components/GenEdRequirementList.tsx
import React, { useEffect, useState } from 'react';
import { getGenEdRequirements } from '../../services/genEdRequirementService';

interface GenEdRequirement {
  gen_ed_id: number;
  requirement_name: string;
}

const GenEdRequirementList: React.FC = () => {
  const [genEdRequirements, setGenEdRequirements] = useState<GenEdRequirement[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchGenEdRequirements = async () => {
      try {
        const data = await getGenEdRequirements();
        setGenEdRequirements(data);
      } catch (err) {
        setError('Failed to fetch GenEd requirements');
      }
    };

    fetchGenEdRequirements();
  }, []);

  return (
    <div>
      <h1>General Education Requirements</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {genEdRequirements.map((requirement) => (
          <li key={requirement.gen_ed_id}>
            {requirement.requirement_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenEdRequirementList;