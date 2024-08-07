import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../utils/localStorageUtil';
import { IStudentProfile } from '../types/IStudentProfile';
import { useUser } from 'C:/Users/benja/CourseSwap3/src/components/CalculatorPage/UserContext';

interface Course {
  universityName: string;
  associatedCollege: string;
  genEdRequirement: string;
  universityCredits: number;
  collegeCredits: number;
  online: boolean;
  universityCourse: string;
  collegeCourse: string;
  universityId: string;
  collegeId: string;
  isOneCredit: boolean;
  collegePriceInDistrict: number;
  collegePriceInState: number;
  collegePriceOutState: number;
  universityCostInState: number;
  universityCostOutOfState: number;
  universityCostInternational: number;
  universityFullCostInState: number;
  universityFullCostOutState: number;
  universityFullCostInternational: number;
}

interface UniversityClasses {
  [universityName: string]: Course[];
}

const StudentProfile: React.FC = () => {
  const [universityClasses, setUniversityClasses] = useState<Course[]>([]);
  const { user, setUser } = useUser();

  useEffect(() => {
    const savedProfile = getFromLocalStorage('studentProfile') as IStudentProfile;
    if (savedProfile) {
      setUser({
        id: 1, // Set a default or retrieved id here
        name: 'Default Name', // Set a default or retrieved name here
        email: 'default@example.com', // Set a default or retrieved email here
        university: savedProfile.university,
        state: savedProfile.homeState,
        grade: 'Default Grade', // Set a default or retrieved grade here
        homestate: savedProfile.homeState,
      });
    }

    const savedClasses = getFromLocalStorage('universityClasses') as UniversityClasses;
    if (savedProfile?.university) {
      setUniversityClasses(savedClasses[savedProfile.university] || []);
    }
  }, [setUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Profile</h1>
      <p>Home State: {user.homestate}</p>
      <h2>Available Courses</h2>
      <ul>
        {universityClasses.map((course) => (
          <li key={course.universityId}>
            {course.universityCourse} ({course.universityId}) - {course.universityCredits} credits
            <ul>
              <li>Gen Ed Requirement: {course.genEdRequirement}</li>
              <li>Online: {course.online ? 'Yes' : 'No'}</li>
              <li>College Course: {course.collegeCourse} ({course.collegeId})</li>
              <li>College Credits: {course.collegeCredits}</li>
              <li>College Price In-District: ${course.collegePriceInDistrict}</li>
              <li>College Price In-State: ${course.collegePriceInState}</li>
              <li>College Price Out-of-State: ${course.collegePriceOutState}</li>
              <li>University Cost In-State: ${course.universityCostInState}</li>
              <li>University Cost Out-of-State: ${course.universityCostOutOfState}</li>
              <li>University Cost International: ${course.universityCostInternational}</li>
              <li>University Full Cost In-State: ${course.universityFullCostInState}</li>
              <li>University Full Cost Out-of-State: ${course.universityFullCostOutState}</li>
              <li>University Full Cost International: ${course.universityFullCostInternational}</li>
              <li>Is One Credit: {course.isOneCredit ? 'Yes' : 'No'}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProfile;
