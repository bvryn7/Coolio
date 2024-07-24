// src/services/universityService.ts
import axiosInstance from '../axiosConfig';

// Interface for the University model
interface IUniversity {
  university_id?: number;
  name: string;
  state: string;
  hex_code: string;
  course_id_prefix: string;
  gen_ed_requirements?: number[]; // Array of GenEdRequirement IDs
  prices?: IUniversityPrice[]; // Array of UniversityPrice objects
}

// Interface for the UniversityPrice model
interface IUniversityPrice {
  credits: number;
  in_state: number;
  out_of_state: number;
  international: number;
}

// Get all universities
export const getUniversities = async () => {
  try {
    const response = await axiosInstance.get('universities/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get university by ID
export const getUniversityById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`universities/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new university
export const createUniversity = async (university: IUniversity) => {
  try {
    const response = await axiosInstance.post('universities/', university);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an existing university
export const updateUniversity = async (id: number, university: IUniversity) => {
  try {
    const response = await axiosInstance.put(`universities/${id}/`, university);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a university by ID
export const deleteUniversity = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`universities/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};