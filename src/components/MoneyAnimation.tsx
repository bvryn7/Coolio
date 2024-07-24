import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/moneyAnimation.json';

const MoneyAnimation: React.FC = () => {
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStopped(true);
    }, 5000); // Adjust the duration to match the animation length
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={animationData}
        style={{ width: '100%', height: '100%' }}
        loop={false}
        autoplay={!isStopped}
        onComplete={() => setIsStopped(true)}
      />
    </div>
  );
};

export default MoneyAnimation;
