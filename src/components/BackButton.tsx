import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@mantine/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the arrow icon

interface BackButtonProps {
  prevLink: string;
}

const BackButton: React.FC<BackButtonProps> = ({ prevLink }) => {
  return (
    <Box className="px-24 mt-4 mb-8">
      <hr className="border-t border-gray-300 mb-4" />
      <Box className="flex justify-start">
        <NavLink to={prevLink}>
          <button className="flex items-center text-[#003478] rounded px-8 py-4 text-xl bg-transparent border-transparent hover:bg-blue-50 transition">
            <ArrowBackIcon className="mr-2" />
            Back
          </button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default BackButton;
