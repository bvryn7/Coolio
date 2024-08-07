// UserContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the User type and export it
export type User = {
  id: number;
  name: string;
  email: string;
  university?: string;
  state?: string;
  grade?: string;
  homestate?: string;
  residencyStatus?: 'in-state' | 'out-of-state';
  commCollegeResidency?: 'in-district' | 'in-state' | 'out-of-state';
};

// Define the context types
type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  fullCost: number;
  setFullCost: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Initialize user as null
  const [fullCost, setFullCost] = useState<number>(0); // Initialize full cost as 0

  return (
    <UserContext.Provider value={{ user, setUser, fullCost, setFullCost }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
