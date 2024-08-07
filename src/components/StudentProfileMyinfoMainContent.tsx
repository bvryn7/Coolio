import React, { useState, useRef, useEffect, RefObject } from 'react';
import { Box, Button } from '@mantine/core';
import Select, { SingleValue } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useUser, User } from './CalculatorPage/UserContext';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import UniversityIcon from '@mui/icons-material/Apartment';
import StateIcon from '@mui/icons-material/LocationCity';
import ConfettiAnimation from './ConfettiAnimation';
import '../styles.css';
import { states } from '../constants/states';
import { universities } from './CalculatorPage/universities';
import { buttonStyle, selectedButtonStyle, selectStyles, containerStyle, headingStyle, subHeadingStyle, questionHeadingStyle } from './StudentProfileMyinfoMainContentStyles';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorageUtil';
import { UNIVERSITY_CLASSES } from 'C:/Users/benja/CourseSwap3/src/constants/universityClasses';

const normalizeStateOrGrade = (value: string | null): string | undefined => value ?? undefined;

interface SelectOption {
  value: string;
  label: string;
}

const StudentProfileMyinfoMainContent: React.FC = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<SelectOption | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [showStateQuestion, setShowStateQuestion] = useState(false);
  const [showSecondQuestion, setShowSecondQuestion] = useState(false);
  const [showThirdQuestion, setShowThirdQuestion] = useState(false);
  const [showEligibilityMessage, setShowEligibilityMessage] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState<SelectOption | null>(null);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [scrollTo, setScrollTo] = useState<RefObject<HTMLDivElement> | null>(null);

  const stateQuestionRef = useRef<HTMLDivElement>(null);
  const secondQuestionRef = useRef<HTMLDivElement>(null);
  const thirdQuestionRef = useRef<HTMLDivElement>(null);
  const eligibilityMessageRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
    setShowStateQuestion(true);
    setScrollTo(stateQuestionRef);
  };

  const handleStateChange = (newValue: SingleValue<SelectOption>) => {
    setSelectedState(newValue ?? null);
    setShowSecondQuestion(true);
    setScrollTo(secondQuestionRef);

    if (user && user.id && newValue) {
      const newState = newValue.value;
      saveToLocalStorage('selectedState', newState);
      setUser({ ...user, state: newState }); // Make sure the user's state is set correctly
      console.log(`User state set to: ${newState}`);
    }
  };

  const handleGradeClick = (grade: string) => {
    const newGrade = normalizeStateOrGrade(grade);
    setSelectedGrade(newGrade ?? null);
    setShowThirdQuestion(true);
    setScrollTo(thirdQuestionRef);
  };

  const handleUniversityChange = (newValue: SingleValue<SelectOption>) => {
    setSelectedUniversity(newValue);
    if (newValue && user && user.id) {
      setShowEligibilityMessage(true);
      setConfettiVisible(true);
      setScrollTo(eligibilityMessageRef);

      // Save selected university to local storage
      saveToLocalStorage('selectedUniversity', newValue.value);
      setUser({ ...user, university: newValue.value });
      console.log(`User university set to: ${newValue.value}`);

      // Save university classes to local storage
      const universityClasses = UNIVERSITY_CLASSES[newValue.value];
      saveToLocalStorage('universityClasses', { [newValue.value]: universityClasses });

      // Navigate to the appropriate page based on selected university
      if (newValue.value === 'Central Michigan University') {
        navigate('/central-michigan');
      } else if (newValue.value === 'Grand Valley State University') {
        navigate('/grand-valley-state');
      }
    }
  };

  useEffect(() => {
    const savedState = getFromLocalStorage('selectedState');
    const savedUniversity = getFromLocalStorage('selectedUniversity');

    if (savedState) {
      setSelectedState(states.find(state => state.value === savedState) ?? null);
      console.log(`Loaded saved state from localStorage: ${savedState}`);
    }

    if (savedUniversity) {
      setSelectedUniversity(universities.find(university => university.value === savedUniversity) ?? null);
      console.log(`Loaded saved university from localStorage: ${savedUniversity}`);
    }
  }, []);

  useEffect(() => {
    if (selectedState && selectedUniversity) {
      const universityState = UNIVERSITY_CLASSES[selectedUniversity.value]?.[0]?.state;
      const status = universityState === selectedState.value ? 'in-state' : 'out-of-state';
      setUser((prevUser) => prevUser ? { ...prevUser, residencyStatus: status } : null);
      console.log(`Updated residencyStatus to ${status} based on universityState: ${universityState} and selectedState: ${selectedState.value}`);
    }
  }, [selectedState, selectedUniversity]);

  return (
    <Box className={containerStyle}>
      <h1 className={headingStyle}>Let's dig into your situation to understand it better</h1>
      <div className="flex justify-center mb-4">
        <AssignmentIcon style={{ fontSize: 80, color: '#003478' }} />
      </div>
      <p className={subHeadingStyle}>
        Are you a current High School Student, Prospective College Student, or Current College Student?
      </p>
      <div className="flex flex-col items-center space-y-6">
        <Button
          className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
            selectedButton === 'highSchool' ? selectedButtonStyle : ''
          }`}
          style={buttonStyle}
          onClick={() => handleButtonClick('highSchool')}
        >
          High School Student
        </Button>
        <Button
          className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
            selectedButton === 'prospective' ? selectedButtonStyle : ''
          }`}
          style={buttonStyle}
          onClick={() => handleButtonClick('prospective')}
        >
          Prospective College Student
        </Button>
        <Button
          className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
            selectedButton === 'currentCollege' ? selectedButtonStyle : ''
          }`}
          style={buttonStyle}
          onClick={() => handleButtonClick('currentCollege')}
        >
          Current College Student
        </Button>
      </div>
      {showStateQuestion && (
        <div ref={stateQuestionRef} className="mt-8">
          <h2 className={questionHeadingStyle}>What state are you from?</h2>
          <div className="flex justify-center mb-4">
            <StateIcon style={{ fontSize: 60, color: '#003478' }} />
          </div>
          <div className="w-full md:w-1/2 mx-auto">
            <Select
              className="w-full"
              options={states}
              onChange={handleStateChange}
              placeholder="Enter your state"
              styles={selectStyles}
              value={selectedState}
            />
          </div>
        </div>
      )}
      {showSecondQuestion && (
        <div ref={secondQuestionRef} className="mt-8">
          <h2 className={questionHeadingStyle}>What grade are you in?</h2>
          <div className="flex justify-center mb-4">
            <SchoolIcon style={{ fontSize: 60, color: '#003478' }} />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <Button
              className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
                selectedGrade === 'freshman' ? selectedButtonStyle : ''
              }`}
              style={buttonStyle}
              onClick={() => handleGradeClick('freshman')}
            >
              Freshman
            </Button>
            <Button
              className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
                selectedGrade === 'sophomore' ? selectedButtonStyle : ''
              }`}
              style={buttonStyle}
              onClick={() => handleGradeClick('sophomore')}
            >
              Sophomore
            </Button>
            <Button
              className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
                selectedGrade === 'junior' ? selectedButtonStyle : ''
              }`}
              style={buttonStyle}
              onClick={() => handleGradeClick('junior')}
            >
              Junior
            </Button>
            <Button
              className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
                selectedGrade === 'senior' ? selectedButtonStyle : ''
              }`}
              style={buttonStyle}
              onClick={() => handleGradeClick('senior')}
            >
              Senior
            </Button>
            <Button
              className={`bg-white text-black border border-gray-300 hover:bg-gray-50 rounded-lg px-8 py-4 font-medium transition-all ${
                selectedGrade === 'seniorPlus' ? selectedButtonStyle : ''
              }`}
              style={buttonStyle}
              onClick={() => handleGradeClick('seniorPlus')}
            >
              Senior+
            </Button>
          </div>
        </div>
      )}
      {showThirdQuestion && (
        <div ref={thirdQuestionRef} className="mt-8">
          <h2 className={questionHeadingStyle}>
            {selectedButton === 'currentCollege'
              ? 'What university do you currently attend?'
              : 'What university do you plan to attend?'}
          </h2>
          <div className="flex justify-center mb-4">
            <UniversityIcon style={{ fontSize: 60, color: '#003478' }} />
          </div>
          <div className="w-full md:w-1/2 mx-auto">
            <Select
              className="w-full"
              options={universities}
              onChange={handleUniversityChange}
              placeholder="Enter your university"
              styles={selectStyles}
              value={selectedUniversity}
            />
          </div>
        </div>
      )}
      {showEligibilityMessage && (
        <div ref={eligibilityMessageRef} className="mt-8">
          {confettiVisible && (
            <div className="confetti-overlay">
              <ConfettiAnimation />
            </div>
          )}
          <p className="text-lg text-gray-800 mt-4">
            Congratulations! You are eligible to save up to{' '}
            <span className="text-green-500 animate-bounce">$20,000</span> at{' '}
            {selectedUniversity?.label} by transferring in community college courses.
          </p>
        </div>
      )}
    </Box>
  );
};

export default StudentProfileMyinfoMainContent;
