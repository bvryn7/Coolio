import React from 'react';
import { useNavigate } from 'react-router-dom';
import MoneyAnimation from './MoneyAnimation'; // Ensure the correct path

const HomeGetStartedCard: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    console.log('Start button clicked');
    navigate('/student-profile');
  };

  return (
    <div
      className="relative bg-white rounded-xl shadow-lg w-[649px] h-[499px] flex flex-col items-center justify-end mx-0 ml-28 border-4 border-[#003478] pb-8 mt-10"
    >
      <div
        className="absolute top-4 left-4 border border-[#003478] text-[#003478] px-2 py-1 rounded-lg font-medium bg-white"
        style={{ fontSize: '1.3em' }}
      >
        RECOMMENDED
      </div>
      <div
        className="absolute top-4 right-4 text-gray-500 px-2 py-1 rounded-lg font-medium bg-gray-100"
        style={{ fontSize: '1.3em' }}
      >
        2 MINS
      </div>
      <div
        className="absolute"
        style={{ top: 'calc(50% - 236px)', left: 'calc(50% - 180px)', width: '260px', height: '260px' }}
      >
        <MoneyAnimation /> {/* Include the MoneyAnimation component */}
      </div>
      <div
        className="absolute text-center text-[1.5rem] font-semibold text-black"
        style={{ top: 'calc(50% + 80px)' }}
      >
        Transfer Course Savings
      </div>
      <button
        className="w-[90%] max-w-[600px] h-[66px] bg-[#003478] text-white rounded-md hover:bg-blue-600 transition duration-300 text-[34px]"
        style={{ marginTop: '150px' }}
        onClick={handleStartClick}
      >
        Start
      </button>
    </div>
  );
};

export default HomeGetStartedCard;
