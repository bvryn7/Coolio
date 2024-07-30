// src/services/genEdRequirementService.ts
import axiosInstance from '../axiosConfig';

// Interface for GenEd Requirement model
export interface IGenEdRequirement {
  id?: number;
  gen_ed_id: number;
  requirement_name: string;
  credits_required: number;
}

// Get all GenEd requirements
export const getGenEdRequirements = async () => {
  try {
    const response = await axiosInstance.get('genedrequirements/');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new GenEd requirement
export const createGenEdRequirement = async (requirement: IGenEdRequirement) => {
  try {
    const response = await axiosInstance.post('genedrequirements/', requirement);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an existing GenEd requirement
export const updateGenEdRequirement = async (id: number, requirement: IGenEdRequirement) => {
  try {
    const response = await axiosInstance.put(`genedrequirements/${id}/`, requirement);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a GenEd requirement
export const deleteGenEdRequirement = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`genedrequirements/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
