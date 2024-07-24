import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css'; // Import Tailwind CSS
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <MantineProvider
      theme={{
        fontFamily: 'Arial, sans-serif',
        colors: {
          primary: [
            '#ebf5ee', '#ccebd6', '#aadfc0', '#84d3a6', '#59bf83', 
            '#38a169', '#32965f', '#2b8152', '#227043', '#195731'
          ]
        }
      }}
    >
      <App />
    </MantineProvider>
  );
}
