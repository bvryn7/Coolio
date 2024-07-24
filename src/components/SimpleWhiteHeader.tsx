import React from 'react';
import { Box, Button } from '@mantine/core';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const SimpleWhiteHeader: React.FC = () => {
  const buttonStyle = {
    padding: '0 10px',
    minWidth: 'auto',
    background: 'none',
  };

  const liveCourseSwapButtonStyle = {
    ...buttonStyle,
    color: '#003478',
    border: '3px solid #003478', // Make the border around the button even bolder
    borderRadius: '5px',
    padding: '5px 10px',
    marginLeft: '15px', // Add margin to the left to create space between buttons
  };

  const iconStyle = {
    transform: 'scale(0.85)', // Reduce the size of the icons by 15%
  };

  return (
    <Box style={headerStyle}>
      <div style={headerContentStyle}>
        <Button variant="subtle" style={buttonStyle}>
          <NotificationsIcon style={iconStyle} />
          <span style={spanStyle}>Notifications</span>
        </Button>
        <Button variant="subtle" style={buttonStyle}>
          <SearchIcon style={iconStyle} />
          <span style={spanStyle}>Search</span>
        </Button>
        <Button variant="subtle" style={buttonStyle}>
          <HelpOutlineIcon style={iconStyle} />
          <span style={spanStyle}>Help</span>
        </Button>
        <Button variant="outline" style={liveCourseSwapButtonStyle}>
          <span style={spanStyle}>Live CourseSwap Advising</span>
        </Button>
      </div>
    </Box>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#FFF7D6', // Yellow background color
  color: '#000', // Black text color
  padding: '24px 0', // Increase padding for taller header
  width: '100%', // Ensure header spans the full width of the screen
  borderBottom: '1px solid #d3d3d3', // Add a line underneath the header
  display: 'flex',
  justifyContent: 'center',
};

const headerContentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  maxWidth: '1600px', // Increase max width to allow more room
  paddingRight: '40px', // Increase padding right to move further right
};

const spanStyle: React.CSSProperties = {
  marginLeft: '5px',
};

export default SimpleWhiteHeader;
