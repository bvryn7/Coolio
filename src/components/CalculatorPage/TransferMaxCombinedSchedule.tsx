import React from 'react';
import { useUser } from './UserContext'; // Ensure this path is correct
import { useClassCost } from './ClassCostContext'; // Import useClassCost

const TransferMaxCombinedSchedule: React.FC = () => {
  const { fullCost } = useUser();
  const { totalClassCost } = useClassCost(); // Use totalClassCost from context

  return (
    <div style={{ width: '100%', border: '3px solid #ccc', borderRadius: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', marginTop: '30px' }}>
      <div className="p-4 flex justify-between items-center">
        <div style={{ textAlign: 'center' }}>
          <p className="font-bold">Old Total Price</p>
          <p>${fullCost.toFixed(2)}</p>
        </div>
        <div className="p-4 text-center" style={{ color: 'green' }}>
          <p className="font-bold">B A's Semester Savings</p>
          <p className="text-2xl">${(0).toFixed(2)}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className="font-bold">New Total Price</p>
          <p>${totalClassCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default TransferMaxCombinedSchedule;
