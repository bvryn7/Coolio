import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import PriceComparison from './components/CalculatorPage/PriceComparison';
import AdditionalComponent from './components/CalculatorPage/AdditionalComponent';
import UniversityList from './components/CalculatorPage/UniversityList';
import CommunityCollegeList from './components/CalculatorPage/CommunityCollegeList';
import CommunityCollegeCourseList from './components/CalculatorPage/CommunityCollegeCourseList';
import CourseEnrollmentList from './components/CalculatorPage/CourseEnrollmentList';
import GenEdRequirementList from './components/CalculatorPage/genEdRequirementList';
import StudentList from './components/CalculatorPage/studentList';
import UniversityCourseList from './components/CalculatorPage/UniversityCourseList';
import TransferMaxCombinedSchedule from './components/CalculatorPage/TransferMaxCombinedSchedule';
import LandingPage from './components/LandingPageFolder/LandingPage';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage'; // Adjusted import path
import StudentProfile from './components/StudentProfileMyinfo'; // Import StudentProfile component
import StudentOverview from './components/StudentOverview'; // Import StudentOverview component
import StudentProgress from './components/StudentProgress'; // Import StudentProgress component
import StudentPick from './components/StudentPick'; // Import StudentPick component
import './styles.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthChange = (authStatus: boolean) => {
    setIsAuthenticated(authStatus);
  };

  return (
    <Router>
      <Main isAuthenticated={isAuthenticated} onAuthChange={handleAuthChange} />
    </Router>
  );
};

interface MainProps {
  isAuthenticated: boolean;
  onAuthChange: (isAuthenticated: boolean) => void;
}

const Main: React.FC<MainProps> = ({ isAuthenticated, onAuthChange }) => {
  const location = useLocation();
  const isPriceComparison = location.pathname === '/price-comparison';

  return (
    <div className={`flex flex-col min-h-screen ${isPriceComparison ? 'bg-background-image' : ''}`}>
      <main className="flex-1 bg-transparent">
        <div className="w-full mx-auto min-h-screen p-0 bg-transparent">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage onAuthChange={onAuthChange} />} />
            <Route path="/home" element={isAuthenticated ? <HomePage /> : <AuthPage onAuthChange={onAuthChange} />} />
            <Route path="/price-comparison" element={isAuthenticated ? <PriceComparison /> : <AuthPage onAuthChange={onAuthChange} />} />
            <Route path="/universities" element={
              <div className="space-y-6 w-full">
                <UniversityList />
                <div className="bg-white p-6 rounded-lg shadow h-full w-full" style={{ borderRadius: '16px' }}>
                  <PriceComparison />
                </div>
                <AdditionalComponent />
              </div>
            } />
            <Route path="/community-colleges" element={<CommunityCollegeList />} />
            <Route path="/university-courses" element={<UniversityCourseList />} />
            <Route path="/community-college-courses" element={<CommunityCollegeCourseList />} />
            <Route path="/course-enrollments" element={<CourseEnrollmentList />} />
            <Route path="/gen-ed-requirements" element={<GenEdRequirementList />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/combined-schedule" element={<TransferMaxCombinedSchedule />} />
            <Route path="/student-profile" element={<StudentProfile />} /> {/* New route */}
            <Route path="/student-overview" element={<StudentOverview />} /> {/* New route */}
            <Route path="/student-progress" element={<StudentProgress />} /> {/* New route */}
            <Route path="/student-pick" element={<StudentPick />} /> {/* New route */}
          </Routes>
        </div>
      </main>
      <footer className="h-16 p-4 bg-gray-100 flex items-center justify-center w-full">
        <span>© 2023 Your Company</span>
      </footer>
    </div>
  );
};

export default App;
