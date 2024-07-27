import React, { useState } from 'react';
import { useUser } from './UserContext'; // Ensure the correct path
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

const AccountMainContent: React.FC = () => {
  const { user } = useUser();
  const [name, setName] = useState(user.name);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hello {name}!</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage your account</h2>
        <div className="flex flex-col gap-6 ml-24"> {/* Adjusted margin-left to 100px (24 tailwind units) */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center w-1/2 border-2 border-[#003478] cursor-pointer"
            onClick={() => handleNavigation('/profile-sign-in')}
          >
            <div className="flex justify-center mb-4">
              <LockIcon className="h-12 w-12" /> {/* Using Material UI Icon */}
            </div>
            <h3 className="text-lg font-medium mb-2">Sign in & security</h3>
            <p className="text-gray-600">Manage your sign-in information and security settings.</p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center w-1/2 border-2 border-[#003478] cursor-pointer"
            onClick={() => handleNavigation('/student-profile-page')}
          >
            <div className="flex justify-center mb-4">
              <PersonIcon className="h-12 w-12" /> {/* Using Material UI Icon */}
            </div>
            <h3 className="text-lg font-medium mb-2">Student Profile</h3>
            <p className="text-gray-600">Update your personal information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMainContent;
