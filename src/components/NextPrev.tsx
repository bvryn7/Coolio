import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mantine/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the arrow icon

interface NextPrevProps {
  nextLink: string;
  prevLink: string;
}

const NextPrev: React.FC<NextPrevProps> = ({ nextLink, prevLink }) => {
  return (
    <Box className="px-24 mt-12" style={{ transform: 'translateY(600px)' }}>
      <hr className="border-t border-gray-300 mb-8" />
      <Box className="flex justify-between">
        <NavLink to={prevLink}>
          <button className="flex items-center text-[#003478] rounded px-8 py-4 text-xl bg-transparent border-transparent hover:bg-blue-50 transition">
            <ArrowBackIcon className="mr-2" />
            Back
          </button>
        </NavLink>
        <NavLink to={nextLink}>
          <button className="flex items-center text-white bg-[#003478] rounded px-8 py-4 text-xl hover:bg-blue-700 transition">
            Continue
          </button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default NextPrev;
