import React, { CSSProperties, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LandingSignInCard: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the sign-in logic here
    // Simulate a successful sign-in for now

    // After successful sign-in, navigate to the Home page
    navigate("/home");
  };

  return (
    <div style={cardStyle}>
      <div style={logoContainerStyle}>
        <img src="/images/logomark.png" alt="TransferMax Logo" style={logoStyle} />
      </div>
      <div style={serviceIconsStyle}>
        <span style={serviceIconStyle}>CourseSwap</span>
        <span style={serviceIconStyle}>MajorPick</span>
        <span style={serviceIconStyle}>JobSearch</span>
      </div>
      <p style={signInTextStyle}>
        Use your <Link to="/auth" style={linkStyle}>TransferMax Account</Link> to sign in to CourseSwap.
      </p>
      <div style={lineContainerStyle}>
        <div style={lineStyle}></div> {/* Horizontal line */}
      </div>
      <form style={formStyle} onSubmit={handleSignIn}>
        <label style={labelStyle} htmlFor="email">
          Phone number, email or user ID
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <div style={rememberMeStyle}>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe" style={{ marginLeft: '5px' }}> Remember me</label>
        </div>
        <button type="submit" style={signInButtonStyle}>
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
      </form>
      <div style={createAccountStyle}>
        <p>
          New to <span style={{ fontWeight: 'bold' }}>TransferMax?</span> 
          <Link to="/auth" style={linkStyle}>Create an account</Link>
        </p>
      </div>
    </div>
  );
};

const cardStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '0 1.5px 5px rgba(0, 0, 0, 0.1)',
  padding: '50px',
  width: '100%',
  maxWidth: '575px',
  fontFamily: "'Poppins', sans-serif",
  border: '1.3px solid #ddd',
  margin: '20px auto', // Center the card with auto margins
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transform: 'translateX(+130px)',
  height: 'calc(72% + 20px)' // Add
};

const logoContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16.67px',
  overflow: 'hidden',
  height: '58.33px',
};

const logoStyle: CSSProperties = {
  height: '100%',
  objectFit: 'contain',
};

const serviceIconsStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8.33px',
  marginBottom: '12.5px',
};

const serviceIconStyle: CSSProperties = {
  fontSize: '11.67px',
  color: '#888',
};

const signInTextStyle: CSSProperties = {
  textAlign: 'center',
  marginBottom: '8.33px',
  fontSize: '9px',
  color: '#000',
  padding: '0 8%',
  fontWeight: 'bold',
};

const linkStyle: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
  marginLeft: '5px', // Add space between the text
};

const lineContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  margin: '12.5px 0',
};

const lineStyle: CSSProperties = {
  width: '85%',
  height: '2px',
  backgroundColor: 'gray',
};

const formStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 13.88%',
};

const labelStyle: CSSProperties = {
  marginBottom: '4.17px',
  fontSize: '11.67px',
  color: '#000',
};

const inputStyle: CSSProperties = {
  padding: '6.67px',
  borderRadius: '3px',
  border: '1px solid #000',
  marginBottom: '12.5px',
  fontSize: '11.67px',
};

const rememberMeStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12.5px',
  fontSize: '11.67px',
  color: '#000',
};

const signInButtonStyle: CSSProperties = {
  padding: '15px 12px',
  borderRadius: '3px',
  fontSize: '11.67px',
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: "'Poppins', sans-serif",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
  backgroundColor: '#023B66',
  color: '#ffffff',
  border: '1.75px solid #0070f3',
};

const lockIconStyle: CSSProperties = {
  marginRight: '6.67px',
  display: 'flex',
  alignItems: 'center',
};

const svgStyle: CSSProperties = {
  width: '15px',
  height: '15px',
  stroke: '#ffffff',
  fill: 'none',
};

const createAccountStyle: CSSProperties = {
  textAlign: 'center',
  marginTop: '12.5px',
  fontSize: '15px',
  color: '#333',
  whiteSpace: 'nowrap',
  padding: '0 13.88%',
};

export default LandingSignInCard;
