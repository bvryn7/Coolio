import React, { useState, useEffect } from 'react';
import { Box } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import SimpleWhiteHeader from './SimpleWhiteHeader';
import Sidebar from './SideBar';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';
import { useUser } from './CalculatorPage/UserContext';
import { getUniversities, getStates, saveProfile } from '../services/apiServices';

const StudentProfilePage: React.FC = () => {
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(isMediumScreen);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [university, setUniversity] = useState(user?.university || '');
  const [state, setState] = useState(user?.state || '');
  const [grade, setGrade] = useState(user?.grade || '');
  const [universities, setUniversities] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsSidebarOpen(isMediumScreen);
  }, [isMediumScreen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const universitiesData = await getUniversities();
        const statesData = await getStates();
        setUniversities(universitiesData);
        setStates(statesData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('User is not logged in');
      return;
    }
    const updatedUser = {
      ...user,
      university,
      state,
      grade,
    };

    try {
      const savedUser = await saveProfile(updatedUser);
      setUser(savedUser);
      localStorage.setItem('user', JSON.stringify(savedUser));
      alert('Profile information updated successfully!');
    } catch (error) {
      alert('Failed to update profile.');
    }
  };

  return (
    <Box className="min-h-screen flex bg-white">
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />
      <Box className="flex-1 flex flex-col bg-white">
        <SimpleWhiteHeader />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
          {error && <p className="text-red-500">{error}</p>}
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <div className="bg-white shadow-md rounded-lg p-6 border-2 border-[#003478] max-w-xl mx-0">
              <h2 className="text-2xl font-semibold mb-4">Update your personal information</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="university">
                    University
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="university"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                  >
                    <option value="">Select your university</option>
                    {universities.map((uni) => (
                      <option key={uni.university_id} value={uni.university_id}>
                        {uni.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                    State of Residence
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <option value="">Select your state</option>
                    {states.map((st) => (
                      <option key={st.value} value={st.value}>
                        {st.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                    Grade
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                  >
                    <option value="">Select your grade</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                  </select>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Update Profile Info
                </button>
              </form>
            </div>
          ) : (
            <p>User is not logged in</p>
          )}
          <BackButton prevLink="/account" />
        </div>
      </Box>
    </Box>
  );
};

export default StudentProfilePage;