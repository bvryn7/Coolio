import React from 'react';
import { useUser } from './UserContext'; // Ensure this path is correct

const TransferMaxCombinedSchedule: React.FC = () => {
  const { fullCost } = useUser();

  return (
    <div style={{ width: '100%' }}>
      <div className="bg-blue-100 p-4 flex justify-between items-center">
        <div>
          <p className="font-bold">Old Total Price</p>
          <p>${fullCost.toFixed(2)}</p>
        </div>
        <div className="bg-yellow-100 p-4 text-center">
          <p className="font-bold">B A's Semester Savings</p>
          <p className="text-2xl">$0.00</p>
          <p className="text-red-600">Save 0.00% with TransferMax!</p>
        </div>
        <div>
          <p className="font-bold">New Total Price</p>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default TransferMaxCombinedSchedule;
