import React, { useEffect, useState } from 'react';
import { getGenEdRequirements, createGenEdRequirement, updateGenEdRequirement, deleteGenEdRequirement } from '../services/genEdRequirementService';

interface IGenEdRequirement {
  id?: number;
  gen_ed_id: number;
  requirement_name: string;
  credits_required: number;
}

const GenEdRequirementList: React.FC = () => {
  const [requirements, setRequirements] = useState<IGenEdRequirement[]>([]);
  const [newRequirement, setNewRequirement] = useState<IGenEdRequirement>({
    gen_ed_id: 1,  // Adjust this according to your actual data or dynamic input
    requirement_name: '',
    credits_required: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGenEdRequirements();
        console.log('Fetched data:', data); // Debugging statement
        setRequirements(data);
      } catch (error) {
        console.error('Error fetching GenEd requirements:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddRequirement = async () => {
    try {
      const created = await createGenEdRequirement(newRequirement);
      console.log('Created requirement:', created); // Debugging statement
      setRequirements([...requirements, created]);
      setNewRequirement({ gen_ed_id: 1, requirement_name: '', credits_required: 0 });
    } catch (error) {
      console.error('Error creating GenEd requirement:', error);
    }
  };

  const handleUpdateRequirement = async (id: number, updatedData: IGenEdRequirement) => {
    try {
      const updated = await updateGenEdRequirement(id, updatedData);
      console.log('Updated requirement:', updated); // Debugging statement
      setRequirements(requirements.map(req => (req.id === id ? updated : req)));
    } catch (error) {
      console.error('Error updating GenEd requirement:', error);
    }
  };

  const handleDeleteRequirement = async (id: number) => {
    try {
      await deleteGenEdRequirement(id);
      console.log('Deleted requirement id:', id); // Debugging statement
      setRequirements(requirements.filter(req => req.id !== id));
    } catch (error) {
      console.error('Error deleting GenEd requirement:', error);
    }
  };

  return (
    <div>
      <h2>General Education Requirements</h2>
      <ul>
        {requirements.map(req => (
          <li key={req.id}>
            {req.requirement_name} - {req.credits_required} credits
            <button onClick={() => handleUpdateRequirement(req.id!, { ...req })}>Update</button>
            <button onClick={() => handleDeleteRequirement(req.id!)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Add New Requirement</h3>
        <input
          type="text"
          value={newRequirement.requirement_name}
          onChange={e => setNewRequirement({ ...newRequirement, requirement_name: e.target.value })}
          placeholder="Requirement Name"
        />
        <input
          type="number"
          value={newRequirement.credits_required}
          onChange={e => setNewRequirement({ ...newRequirement, credits_required: Number(e.target.value) })}
          placeholder="Credits Required"
        />
        <button onClick={handleAddRequirement}>Add Requirement</button>
      </div>
    </div>
  );
};

export default GenEdRequirementList;