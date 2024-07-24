
// src/components/CourseEnrollmentList.tsx
import React, { useEffect, useState } from 'react';
import { getCourseEnrollments } from '../../services/courseEnrollmentService';

interface CourseEnrollment {
  enrollment_id: number;
  student: number;
  university_course?: number | null;
  community_college_course?: number | null;
}

const CourseEnrollmentList: React.FC = () => {
  const [courseEnrollments, setCourseEnrollments] = useState<CourseEnrollment[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCourseEnrollments = async () => {
      try {
        const data = await getCourseEnrollments();
        setCourseEnrollments(data);
      } catch (err) {
        setError('Failed to fetch course enrollments');
      }
    };

    fetchCourseEnrollments();
  }, []);

  return (
    <div>
      <h1>Course Enrollments</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {courseEnrollments.map((enrollment) => (
          <li key={enrollment.enrollment_id}>
            Student ID: {enrollment.student} - {enrollment.university_course 
              ? `University Course ID: ${enrollment.university_course}`
              : `Community College Course ID: ${enrollment.community_college_course}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseEnrollmentList;