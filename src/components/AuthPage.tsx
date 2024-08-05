import React, { useState, useEffect, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './CalculatorPage/UserContext'; // Import the useUser hook for setting user
import { signUp, login } from '../utils/authService';

interface AuthPageProps {
  onAuthChange: (isAuthenticated: boolean) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthChange }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser(); // Get setUser from context

  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    const savedRememberMe = localStorage.getItem('savedRememberMe') === 'true';

    if (savedEmail && savedPassword && savedRememberMe) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(savedRememberMe);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userData = isSignUp ? await signUp(name, email, password) : await login(email, password);

      // Save user data to local storage
      localStorage.setItem('userId', userData.id.toString());
      localStorage.setItem('authToken', userData.token);

      if (rememberMe) {
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedPassword', password);
        localStorage.setItem('savedRememberMe', 'true');
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
        localStorage.removeItem('savedRememberMe');
      }

      // Update user context with user data
      setUser(userData); // Set the user data in context

      onAuthChange(true);
      navigate('/home');
    } catch (error) {
      console.error('Error during authentication', error);
      alert('Authentication failed. Please, try again.');
    }
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={logoContainerStyle}>
          <img src="/images/logomark.png" alt="TransferMax Logo" style={logoStyle} />
        </div>
        <div style={serviceIconsStyle}>
          <span style={serviceIconStyle}>CourseSwap</span>
          <span style={serviceIconStyle}>MajorPick</span>
          <span style={serviceIconStyle}>JobSearch</span>
        </div>
        <h2 style={headingStyle}>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <div style={lineContainerStyle}>
          <div style={lineStyle}></div>
        </div>
        <form style={formStyle} onSubmit={handleSubmit}>
          {isSignUp && (
            <label style={labelStyle}>
              Name:
              <input
                style={inputStyle}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isSignUp}
              />
            </label>
          )}
          <label style={labelStyle}>
            Email:
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label style={labelStyle}>
            Password:
            <input
              style={inputStyle}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {!isSignUp && (
            <div style={rememberMeStyle}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={checkboxStyle}
              />
              <label style={rememberMeLabelStyle}>Remember Me</label>
            </div>
          )}
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
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div style={createAccountStyle}>
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <span onClick={() => setIsSignUp(!isSignUp)} style={toggleLinkStyle}>
              {isSignUp ? ' Sign In' : ' Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const pageStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#FFF7D6',
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
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

const headingStyle: CSSProperties = {
  textAlign: 'center',
  marginBottom: '8.33px',
  fontSize: '18px',
  color: '#003478',
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
  alignItems: 'center',
  width: '100%', // Ensure form is centered
};

const labelStyle: CSSProperties = {
  marginBottom: '10px',
  fontSize: '11.67px',
  color: '#000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle: CSSProperties = {
  padding: '6.67px',
  borderRadius: '3px',
  border: '1px solid #000',
  marginBottom: '12.5px',
  fontSize: '11.67px',
  width: '100%',
};

const rememberMeStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '12.5px',
  fontSize: '11.67px',
  color: '#000',
};

const checkboxStyle: CSSProperties = {
  marginRight: '10px',
};

const rememberMeLabelStyle: CSSProperties = {
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
  width: '100%',
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

const toggleLinkStyle: CSSProperties = {
  cursor: 'pointer',
  color: '#007BFF',
  textDecoration: 'underline',
};

export default AuthPage;
