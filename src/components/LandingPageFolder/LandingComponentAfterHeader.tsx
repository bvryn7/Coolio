import React, { CSSProperties } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const LandingComponentAfterHeader: React.FC = () => {
  return (
    <div style={headerStyle}>
      <div style={leftSectionStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3" // Increased strokeWidth to make lines more bold
          strokeLinecap="round"
          strokeLinejoin="round"
          style={menuIconStyle}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
      <div style={centerSectionStyle}>
        <img src="/images/logomark.png" alt="Logo" style={logoStyle} />
      </div>
      <div style={rightSectionStyle}>
        <Link to="/auth">
          <button style={{ ...signUpButtonStyle }} className="sign-up-button">
            Sign up
          </button>
        </Link>
        <Link to="/auth">
          <button style={{ ...signInButtonStyle }} className="sign-in-button">
            <span style={lockIconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-lock"
                style={svgStyle}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

const headerStyle: CSSProperties = {
  backgroundColor: "#FFFFFF",
  color: "#000",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontFamily: "'Poppins', sans-serif",
};

const leftSectionStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

const centerSectionStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const rightSectionStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  gap: "20px",
  transform: "translateX(-40px)", // Move the section further to the left
};

const logoStyle: CSSProperties = {
  height: "50px", // Adjust the height as needed
  width: "auto", // Maintain aspect ratio
  objectFit: "contain",
  objectPosition: "center",
};

const menuIconStyle: CSSProperties = {
  height: "45px", // Adjust height as needed
  width: "45px", // Maintain aspect ratio
  cursor: "pointer",
  transform: "translateX(+40px)", // Move the section further to the left
};

const commonButtonStyle: CSSProperties = {
  padding: "10px 20px",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s",
};

const signUpButtonStyle: CSSProperties = {
  ...commonButtonStyle,
  backgroundColor: "#ffffff",
  color: "#0070f3",
  border: "2px solid #0070f3",
};

const signInButtonStyle: CSSProperties = {
  ...commonButtonStyle,
  backgroundColor: "#0070f3",
  color: "#ffffff",
  border: "2px solid #0070f3",
};

const lockIconStyle: CSSProperties = {
  marginRight: "8px",
  display: "flex",
  alignItems: "center",
};

const svgStyle: CSSProperties = {
  width: "16px",
  height: "16px",
  stroke: "#ffffff",
  fill: "none",
};

export default LandingComponentAfterHeader;
