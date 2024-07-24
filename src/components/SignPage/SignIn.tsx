// src/components/SignPage/SignIn.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  onSignIn: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Handle the sign-in logic here
    // Simulate a successful sign-in for now
    onSignIn();

    // After successful sign-in, navigate to the Price Comparison page
    navigate("/price-comparison");
  };

  return (
    <div style={signInPageStyle}>
      <h2 style={headingStyle}>Sign In</h2>
      <input
        type="text"
        placeholder="Email or Phone Number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />
      <div style={rememberMeContainerStyle}>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          style={checkboxStyle}
        />
        <label style={rememberMeLabelStyle}>Remember Me</label>
      </div>
      <button onClick={handleSignIn} style={signInButtonStyle}>
        Sign In
      </button>
    </div>
  );
};

const signInPageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#F1F1E6", // Light Grey background
};

const headingStyle: React.CSSProperties = {
  color: "#003478", // Dark Blue
  fontSize: "24px",
  marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "4px",
  fontSize: "16px",
  marginBottom: "10px",
  border: "1px solid #003478", // Dark Blue border
  width: "250px",
};

const rememberMeContainerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const checkboxStyle: React.CSSProperties = {
  marginRight: "10px",
};

const rememberMeLabelStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#003478", // Dark Blue
};

const signInButtonStyle: React.CSSProperties = {
  padding: "10px 20px",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  backgroundColor: "#79A5FF", // Light Blue
  color: "#003478", // Dark Blue
  border: "2px solid #003478", // Dark Blue border
  marginTop: "20px",
};

export default SignIn;
