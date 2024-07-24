
// src/services/studentService.ts
import axiosInstance from '../axiosConfig';

// Interface for Student model
interface IStudent {
  student_id?: number;
  name: string;
  university: number;
  state: string;
  username: string;
  old_total_price: number;
  new_total_price: number;
  total_savings: number;
  district_status: string; // 'in_district', 'out_of_district', 'international'
}

// Get all students
export const getStudents = async () => {
  try {
    const response = await axiosInstance.get('students/');
    return response.data;
  } catch (error) {
    throw error;
  }
};