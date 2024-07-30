import React, { useState, useRef, useEffect, RefObject } from 'react';
import { Box, Button } from '@mantine/core';
import Select, { SingleValue } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useUser, User } from './UserContext';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import UniversityIcon from '@mui/icons-material/Apartment';
import StateIcon from '@mui/icons-material/LocationCity';
import ConfettiAnimation from './ConfettiAnimation';
import '../styles.css';
import axios from 'axios';
import { getUniversities, getStates, University, State } from '../services/universityService';
import {
  buttonStyle,
  selectedButtonStyle,
  selectStyles,
  containerStyle,
  headingStyle,
  subHeadingStyle,
  questionHeadingStyle,
} from './StudentProfileMyinfoMainContentStyles';

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
  const [universities, setUniversities] = useState<SelectOption[]>([]);
  const [states, setStates] = useState<SelectOption[]>([]);

  const stateQuestionRef = useRef<HTMLDivElement>(null);
  const secondQuestionRef = useRef<HTMLDivElement>(null);
  const thirdQuestionRef = useRef<HTMLDivElement>(null);
  const eligibilityMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await getUniversities();
        const options = data.map((university: University) => ({
          value: university.id.toString(),
          label: university.name,
        }));
        setUniversities(options);
      } catch (error) {
        console.error('Failed to fetch universities', error);
      }
    };

    const fetchStates = async () => {
      try {
        const data = await getStates();
        const options = data.map((state: State) => ({
          value: state.id.toString(),
          label: state.name,
        }));
        setStates(options);
      } catch (error) {
        console.error('Failed to fetch states', error);
      }
    };

    fetchUniversities();
    fetchStates();
  }, []);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
    setShowStateQuestion(true);
    setScrollTo(stateQuestionRef);
  };

  const handleStateChange = async (newValue: SingleValue<SelectOption>) => {
    setSelectedState(newValue ?? null);
    setShowSecondQuestion(true);
    setScrollTo(secondQuestionRef);

    const newState = newValue?.value ?? undefined;
    if (newState && user && user.id) {
      try {
        const updatedStudentInfo = {
          homestate: newState, // Ensure it's a string
          name: user.name,
          email: user.email,
        };

        const response = await axios.patch(
          `http://localhost:8000/api/students/${user.id}/`,
          updatedStudentInfo
        );

        setUser({ ...user, homestate: newState });
      } catch (error: any) {
        console.error('Failed to save state:', error.response ? error.response.data : error.message);
      }
    } else {
      console.error('User or user.id is undefined', user);
    }
  };

  const handleGradeClick = (grade: string) => {
    const newGrade = normalizeStateOrGrade(grade);
    setSelectedGrade(newGrade ?? null);
    setShowThirdQuestion(true);
    setScrollTo(thirdQuestionRef);
  };

  const handleUniversityChange = async (newValue: SingleValue<SelectOption>) => {
    setSelectedUniversity(newValue);
    if (newValue && user && user.id) {
      setShowEligibilityMessage(true);
      setConfettiVisible(true);
      setScrollTo(eligibilityMessageRef);

      try {
        const updatedStudent = {
          university: newValue.value,
          name: user.name,
          email: user.email,
        };

        const responseStudent = await axios.patch(
          `http://localhost:8000/api/students/${user.id}/`,
          updatedStudent
        );

        setUser({ ...user, university: newValue.value });
      } catch (error: any) {
        console.error('Failed to save university:', error.response ? error.response.data : error.message);
      }
    } else {
      console.error('User or user.id is undefined', user);
    }
  };

  useEffect(() => {
    const saveProfile = async () => {
      if (!user) return;

      const profileData: User = {
        id: user.id,
        name: user.name,
        email: user.email,
        university: selectedUniversity?.value,
        homestate: selectedState ? selectedState.value : undefined, // Ensure it's a string
        grade: normalizeStateOrGrade(selectedGrade) ?? undefined,
      };

      try {
        const response = await axios.patch(
          `http://localhost:8000/api/students/${user.id}/`,
          profileData
        );
        setUser(response.data);
      } catch (error: any) {
        console.error('Failed to save profile:', error);
      }
    };

    if (selectedUniversity || selectedState || selectedGrade) {
      saveProfile();
    }
  }, [selectedUniversity, selectedState, selectedGrade, user, setUser]);

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
