import axiosInstance from '../axiosConfig';

export const getUniversities = async () => {
  const response = await axiosInstance.get('/universitys/');
  return response.data;
};

export const getStates = async () => {
  const response = await axiosInstance.get('/states/');
  return response.data;
};

export const saveProfile = async (profileData: any) => {
  try {
    const response = await axiosInstance.put(`/students/${profileData.id}/`, profileData);
    return response.data;
  } catch (error: any) { // Explicitly define the error type
    console.error('Error saving profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};
