
// src/services/communityCollegeService.ts
import axiosInstance from '../axiosConfig';

// Interface for Community College model
interface ICommunityCollege {
  cc_id?: number;
  name: string;
  state: string;
  hex_code: string;
  university: number;
  gen_ed_requirements?: number[];
  prices?: ICommunityCollegePrice[];
}

// Interface for Community College Price model
interface ICommunityCollegePrice {
  credits: number;
  in_district_fee: number;
  out_of_district_fee: number;
  out_of_state_fee: number;
  international_fee: number;
}

// Get all community colleges
export const getCommunityColleges = async () => {
  try {
    const response = await axiosInstance.get('community_colleges/');
    return response.data;
  } catch (error) {
    throw error;
  }
};
