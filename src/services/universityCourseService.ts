
// src/services/universityCourseService.ts
import axiosInstance from '../axiosConfig';

// Interface for University Course model
interface IUniversityCourse {
  course_id?: number;
  course_name: string;
  gen_ed_requirement: number; // The ID of the associated GenEdRequirement
  credits: number;
  orig_price: number;
  university: number; // The ID of the associated University
  equivalent_course?: number | null; // The ID of the equivalent Community College Course
}

// Get all university courses
export const getUniversityCourses = async () => {
  try {
    const response = await axiosInstance.get('university_courses/');
    return response.data;
  } catch (error) {
    throw error;
  }
};
