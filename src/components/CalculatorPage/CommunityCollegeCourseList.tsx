
// src/components/CommunityCollegeCourseList.tsx
import React, { useEffect, useState } from 'react';
import { getCommunityCollegeCourses } from '../../services/communityCollegeCourseService';

interface CommunityCollegeCourse {
  course_id: number;
  course_name: string;
  credits: number;
  online: string;
}

const CommunityCollegeCourseList: React.FC = () => {
  const [communityCollegeCourses, setCommunityCollegeCourses] = useState<CommunityCollegeCourse[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCommunityCollegeCourses = async () => {
      try {
        const data = await getCommunityCollegeCourses();
        setCommunityCollegeCourses(data);
      } catch (err) {
        setError('Failed to fetch community college courses');
      }
    };

    fetchCommunityCollegeCourses();
  }, []);

  return (
    <div>
      <h1>Community College Courses</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {communityCollegeCourses.map((course) => (
          <li key={course.course_id}>
            {course.course_name} - {course.credits} credits - Online: {course.online}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityCollegeCourseList;