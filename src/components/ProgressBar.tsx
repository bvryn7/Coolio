import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar: React.FC = () => {
  const steps = ['My Info', 'Overview', 'Progress', 'Pick', 'Dashboard'];
  const currentStepIndex = 0; // Change this index based on the current progress
  const currentProgress = 0.25; // Fractional progress within the current step

  return (
    <div className="w-2/3 mt-4 ml-8">
      <div className="relative flex justify-between items-center space-x-2">
        {steps.map((step, index) => (
          <div key={index} className="relative flex-1">
            {index < steps.length - 1 && (
              <div className="absolute top-0 left-0 h-2 w-full bg-gray-300 rounded"></div>
            )}
            {index <= currentStepIndex && (
              <motion.div
                className="absolute top-0 left-0 h-2 bg-blue-800 rounded"
                initial={{ width: 0 }}
                animate={{ width: `${index === currentStepIndex ? currentProgress * 100 : 100}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            )}
            <div className="relative flex justify-center items-center mt-6">
              <div className="absolute -top-6">
                <div className="text-sm font-semibold text-gray-600">
                  {step}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
