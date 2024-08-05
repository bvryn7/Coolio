// src/services/apiServices.ts

// Import axiosInstance if it's needed for other parts of the application.
import axiosInstance from '../axiosConfig';

// Mock implementation of saving profile
export const saveProfile = async (profileData: any) => {
  console.log('Mock saveProfile called with:', profileData);
  return profileData; // Mock return the profile data
};

// Mock data for universities
export const getUniversities = async () => {
  return [
    { university_id: 1, name: 'University A' },
    { university_id: 2, name: 'University B' },
  ];
};

// Mock data for states
export const getStates = async () => {
  return [
    { value: 'NY', label: 'New York' },
    { value: 'CA', label: 'California' },
  ];
};
