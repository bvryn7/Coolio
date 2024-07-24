// src/components/AdditionalComponent.tsx
import React from 'react';

const AdditionalComponent: React.FC = () => {
  console.log('AdditionalComponent rendered');

  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue', textAlign: 'center' }}>
      <h2>Additional Component</h2>
      <p>This is the additional component content.</p>
    </div>
  );
};

export default AdditionalComponent;