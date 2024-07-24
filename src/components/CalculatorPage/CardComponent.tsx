import React, { ReactNode } from 'react';
import { Card } from '@mantine/core';

interface CardComponentProps {
  children: ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = ({ children }) => {
  return (
    <Card
      shadow="lg"
      padding="lg"
      className="bg-white rounded-lg shadow-lg p-6 hover-effect"
      style={{ transition: 'transform 0.2s ease-in-out' }}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
