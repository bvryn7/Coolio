
// src/services/genEdRequirementService.ts
import axiosInstance from '../axiosConfig';

// Interface for GenEd Requirement model
interface IGenEdRequirement {
  gen_ed_id?: number;
  requirement_name: string;
}

// Get all GenEd requirements
export const getGenEdRequirements = async () => {
  try {
    const response = await axiosInstance.get('gen_ed_requirements/');
    return response.data;
  } catch (error) {
    throw error;
  }
};