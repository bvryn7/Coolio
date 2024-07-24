import React from 'react';
import { Card, Text } from '@mantine/core';

interface WhiteCardTwoProps {
  isVisible: boolean;
}

const WhiteCardTwo: React.FC<WhiteCardTwoProps> = ({ isVisible }) => {
  return (
    <Card
      shadow="lg"
      padding="lg"
      className="bg-light-blue rounded-lg shadow-lg w-full p-6 mt-6 hover-effect"
      style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s ease-in-out', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#e0f7fa' }} // Light blue background color
    >
      <div className="relative w-full flex justify-between items-center space-x-4">
        <div
          className={`bg-blue-100 rounded-lg flex-1 text-center p-4 transition-all duration-500 hover-effect ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s ease-in-out' }}
        >
          <Text style={{ fontWeight: 'bold', color: '#2d3748' }} className="mb-2">Old Total Price</Text>
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>$0.00</Text>
        </div>
        <div
          className={`bg-yellow-100 rounded-lg flex-1 text-center p-4 transition-all duration-500 hover-effect ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s ease-in-out' }}
        >
          <Text style={{ fontWeight: 'bold', color: '#2d3748' }} className="mb-2">B A's Semester Savings</Text>
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>$0.00</Text>
          <Text style={{ color: '#e53e3e', fontWeight: 'bold', marginTop: '0.5rem' }}>Save 0.00% with TransferMax!</Text>
        </div>
        <div
          className={`bg-blue-100 rounded-lg flex-1 text-center p-4 transition-all duration-500 hover-effect ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s ease-in-out' }}
        >
          <Text style={{ fontWeight: 'bold', color: '#2d3748' }} className="mb-2">New Total Price</Text>
          <Text style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>$0.00</Text>
        </div>
      </div>
    </Card>
  );
};

export default WhiteCardTwo;
