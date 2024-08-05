// src/components/StudentProfile.tsx
import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../utils/localStorageUtil'; // Import the utility function
import { IStudentProfile } from '../types/IStudentProfile'; // Import the types

const StudentProfile: React.FC = () => {
  const [studentProfile, setStudentProfile] = useState<IStudentProfile | null>(null);

  useEffect(() => {
    const savedProfile = getFromLocalStorage('studentProfile') as IStudentProfile;
    setStudentProfile(savedProfile);
  }, []);

  if (!studentProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Profile</h1>
      <p>Home State: {studentProfile.homeState}</p>
      <p>Pricing Preferences: {studentProfile.pricingPreferences.discount}</p>
      {/* Render other profile information */}
    </div>
  );
};

export default StudentProfile;
