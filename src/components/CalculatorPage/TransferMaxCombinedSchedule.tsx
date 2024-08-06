
import React from 'react';
import CardComponent from './CardComponent';

const TransferMaxCombinedSchedule: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className="bg-blue-100 p-4 flex justify-between items-center">
        <div>
          <p className="font-bold">Old Total Price</p>
          <p>$0.00</p>
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
      <CardComponent>
        <h2 className="text-xl font-bold mt-4">TransferMax Combined Schedule</h2>
        <p>
          University Course 
          <span className="font-bold"> [ </span>
          <span className="text-blue-600">Retain Active Student Status</span> 
          <span className="font-bold"> ] </span>
        </p>
      </CardComponent>
    </div>
  );
};

export default TransferMaxCombinedSchedule;