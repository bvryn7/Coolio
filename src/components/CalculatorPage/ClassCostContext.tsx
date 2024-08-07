import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ClassCostContextType {
  totalClassCost: number;
  setTotalClassCost: (cost: number) => void;
}

const ClassCostContext = createContext<ClassCostContextType | undefined>(undefined);

export const ClassCostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalClassCost, setTotalClassCost] = useState<number>(0);

  return (
    <ClassCostContext.Provider value={{ totalClassCost, setTotalClassCost }}>
      {children}
    </ClassCostContext.Provider>
  );
};

export const useClassCost = () => {
  const context = useContext(ClassCostContext);
  if (!context) {
    throw new Error('useClassCost must be used within a ClassCostProvider');
  }
  return context;
};
