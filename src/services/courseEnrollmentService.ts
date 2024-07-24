
// src/services/courseEnrollmentService.ts
import axiosInstance from '../axiosConfig';

// Interface for Course Enrollment model
interface ICourseEnrollment {
  enrollment_id?: number;
  student: number;
  university_course?: number | null; // ID of University Course
  community_college_course?: number | null; // ID of Community College Course
}

// Get all course enrollments
export const getCourseEnrollments = async () => {
  try {
    const response = await axiosInstance.get('course_enrollments/');
    return response.data;
  } catch (error) {
    throw error;
  }
};