import React from 'react';
import { useUser } from './UserContext'; // Ensure this path is correct
import { useClassCost } from './ClassCostContext'; // Ensure this path is correct

const TransferMaxCombinedSchedule: React.FC = () => {
  const { fullCost } = useUser();
  const { totalClassCost } = useClassCost(); // Use totalClassCost from context

  const savings = fullCost - totalClassCost;

  return (
    <div style={{ 
      width: '300px', // Adjust width as necessary
      border: '3px solid #ccc', 
      borderRadius: '16px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      overflow: 'hidden', 
      position: 'fixed', // Make it fixed
      top: '140px', // Adjusted top position to move it down by 50 pixels
      right: '10px', // Adjust the right position as needed
      backgroundColor: 'white', // Ensure it has a background
      zIndex: 1000, // Ensure it appears above other content
    }}>
      <div className="p-4 flex justify-between items-center">
        <div style={{ textAlign: 'center' }}>
          <p className="font-bold">Old Total Price</p>
          <p>${fullCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
        <div className="p-4 text-center" style={{ color: 'green' }}>
          <p className="font-bold">B A's Semester Savings</p>
          <p className="text-2xl">${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className="font-bold">New Total Price</p>
          <p>${totalClassCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
      </div>
    </div>
  );
};

export default TransferMaxCombinedSchedule;
