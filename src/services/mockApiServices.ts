
// src/services/mockApiServices.ts

import { User } from '../components/UserContext';

export const saveProfile = async (profileData: User): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Profile data saved (mock):', profileData);
      resolve(profileData); // Resolve with the same data
    }, 1000);
  });
};