// services/universityService.ts

import axios from 'axios';

export interface University {
  id: number;
  name: string;
  location: string;
}

export interface State {
  id: number;
  name: string;
  code: string;
}

export const getUniversities = async (): Promise<University[]> => {
  const response = await axios.get('http://localhost:8000/api/universities/');
  return response.data;
};

export const getStates = async (): Promise<State[]> => {
  const response = await axios.get('http://localhost:8000/api/states/');
  return response.data;
};
