import React, { createContext, useContext, useState } from 'react';

// Define the User type
type User = {
  name: string;
  email: string;
  university?: string; // Add optional university property
  state?: string;      // Add optional state property
  grade?: string;      // Add optional grade property
};

// Define the context types
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: 'Benjamin',
    email: 'benjamin@example.com',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
