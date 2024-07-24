import React, { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPromo: React.FC = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const handleGetStarted = () => {
    // Navigate to the auth page
    navigate("/auth");
  };

  return (
    <div style={promoCardStyle}>
      {/* Text box in the upper left corner */}
      <div style={promoTextBoxStyle}>
        <div style={promoTitleStyle}>100% savings guarantee, however you swap</div>
        <div style={promoSubtitleStyle}>
          Let CourseSwitch handle it for you with a 100% savings guarantee. Get started now!
        </div>
      </div>
      <div style={promoButtonContainerStyle}>
        <button onClick={handleGetStarted} style={promoButtonStyle}>Get started</button>
      </div>
    </div>
  );
};

const promoCardStyle: CSSProperties = {
  backgroundColor: '#F1F1E6',
  borderRadius: '20px',
  padding: '28.89px',
  width: '100%',
  maxWidth: '2300px',
  fontFamily: "'Poppins', sans-serif",
  margin: '20px 0',
  height: '790px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Align text to the top
  alignItems: 'flex-start', // Align to the left
  position: 'relative',
};

const promoTextBoxStyle: CSSProperties = {
  backgroundColor: '#F1F1E6',
  padding: '20px',
  borderRadius: '10px',
  position: 'absolute',
  top: '20px',
  left: '20px',
  maxWidth: '300px',
  transform: 'translate(+30px, +30px)', // Move the component to the left - by pixels and up - by pixels
};

const promoTitleStyle: CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const promoSubtitleStyle: CSSProperties = {
  fontSize: '16px',
  color: '#333',
};

const promoButtonContainerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  transform: 'translate(+30px, -75px)', //Move the component to the left - by pixels and up - by pixels
};

const promoButtonStyle: CSSProperties = {
  padding: '10px 20px',
  borderRadius: '5.56px',
  fontSize: '20.67px',
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: "'Poppins', sans-serif",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
  backgroundColor: '#1C4E80',
  color: '#FFFFFF',
  border: 'none',
  marginTop: '20px', // Ensure the button is separated from the text box
};

export default LandingPromo;
