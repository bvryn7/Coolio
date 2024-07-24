import React from 'react';
import { useNavigate } from 'react-router-dom';
import MoneyAnimation from './MoneyAnimation'; // Ensure the correct path

const HomeGetStartedCard: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/student-profile');
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg w-[649px] h-[499px] flex flex-col items-center justify-end mx-auto border-4 border-[#003478] pb-8" style={{ left: '-365px', top: '50px' }}>
      <div className="absolute top-4 left-4 border border-[#003478] text-[#003478] px-2 py-1 rounded-lg font-medium bg-white" style={{ fontSize: '1.3em' }}>
        RECOMMENDED
      </div>
      <div className="absolute top-4 right-4 text-gray-500 px-2 py-1 rounded-lg font-medium bg-gray-100" style={{ fontSize: '1.3em' }}>
        2 MINS
      </div>
      <div className="absolute" style={{ top: 'calc(50% - 276px)', left: 'calc(50% - 220px)' }}>
        <MoneyAnimation /> {/* Include the MoneyAnimation component */}
      </div>
      <div className="absolute text-center text-[1.5rem] font-semibold text-black" style={{ top: 'calc(50% + 80px)' }}>
        Transfer Course Savings
      </div>
      <button
        className="w-[600px] h-[66px] bg-[#003478] text-white rounded-md hover:bg-blue-600 transition duration-300 text-[34px]"
        style={{ marginTop: '150px' }}
        onClick={handleStartClick}
      >
        Start
      </button>
    </div>
  );
};

export default HomeGetStartedCard;
