
// src/services/communityCollegeCourseService.ts
import axiosInstance from '../axiosConfig';

// Interface for Community College Course model
interface ICommunityCollegeCourse {
  course_id?: number;
  course_name: string;
  gen_ed_requirement: number; // ID of the GenEdRequirement
  credits: number;
  community_college: number; // ID of the Community College
  equivalent_course?: number | null; // ID of the University Course
  online: string; // 'yes', 'no', or 'hybrid'
}

// Get all community college courses
export const getCommunityCollegeCourses = async () => {
  try {
    const response = await axiosInstance.get('community_college_courses/');
    return response.data;
  } catch (error) {
    throw error;
  }
};