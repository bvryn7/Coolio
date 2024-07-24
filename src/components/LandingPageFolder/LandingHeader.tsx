import React from 'react';
import { Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const LandingHeader: React.FC = () => {
  return (
    <div style={headerStyle}>
      <Text style={textStyle}>
        <span style={boldTextStyle}>Still need to schedule?</span> CourseSwitch can pick your course schedule for 100% savings guarantee.{' '}
        <Link to="/auth" style={linkStyle}>
          Get started
        </Link>
      </Text>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#FFF7D6', // Updated background color
  color: '#000', // Black text color
  padding: '18px 0', // Increased padding for bigger header
  textAlign: 'center',
  width: '100%', // Ensure header spans the full width of the screen
  display: 'block', // Ensure it's a block-level element
};

const textStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '20px', // Increased font size for bigger text
};

const boldTextStyle: React.CSSProperties = {
  fontWeight: 700, // Bold
};

const linkStyle: React.CSSProperties = {
  color: '#000', // Black link color
  textDecoration: 'underline',
  fontWeight: 700, // Bold
};

export default LandingHeader;
