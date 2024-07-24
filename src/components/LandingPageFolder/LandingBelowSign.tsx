import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const LandingBelowSign: React.FC = () => {
  return (
    <div style={cardStyle}>
      <div style={textContainerStyle}>
        <h2 style={headingStyle}>Still need to schedule?</h2>
        <p style={paragraphStyle}>CourseSwitch can pick your course schedule with a 100% savings guarantee. Get started now!</p>
        <Link to="/auth" style={linkStyle}>Learn more</Link>
      </div>
      {/* 
      <div style={imageContainerStyle}>
        <img src="path_to_image" alt="Expert" style={imageStyle} />
      </div>
      */}
    </div>
  );
};

const cardStyle: CSSProperties = {
  backgroundColor: '#D6E0E5', // Updated background color
  borderRadius: '20px',
  boxShadow: '0 1.5px 5px rgba(0, 0, 0, 0.1)',
  padding: '50px',
  width: '100%',
  maxWidth: '575px',
  fontFamily: "'Poppins', sans-serif",
  border: '1.3px solid #ddd',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(34% - 24px)', // Add
  transform: 'translateX(+130px)' // Keep this as per your need
};

const textContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
};

const headingStyle: CSSProperties = {
  fontWeight: 'bold',
  fontSize: '24px',
  marginBottom: '10px',
};

const paragraphStyle: CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.5',
};

const linkStyle: CSSProperties = {
  color: '#007BFF',
  textDecoration: 'underline', // Added underline
  marginTop: '10px',
};

// Commented out image styles
// const imageContainerStyle: CSSProperties = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
// };

// const imageStyle: CSSProperties = {
//   borderRadius: '10px',
//   width: '150px',
//   height: 'auto',
// };

export default LandingBelowSign;
