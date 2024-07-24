
// src/components/UniversityCourseList.tsx
import React, { useEffect, useState } from 'react';
import { getUniversityCourses } from '../../services/universityCourseService';

interface UniversityCourse {
  course_id: number;
  course_name: string;
  credits: number;
  orig_price: number;
}

const UniversityCourseList: React.FC = () => {
  const [universityCourses, setUniversityCourses] = useState<UniversityCourse[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUniversityCourses = async () => {
      try {
        const data = await getUniversityCourses();
        setUniversityCourses(data);
      } catch (err) {
        setError('Failed to fetch university courses');
      }
    };

    fetchUniversityCourses();
  }, []);

  return (
    <div>
      <h1>University Courses</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {universityCourses.map((course) => (
          <li key={course.course_id}>
            {course.course_name} - {course.credits} credits - ${course.orig_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityCourseList;
