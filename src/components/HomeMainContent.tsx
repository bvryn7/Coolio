import React from 'react';

interface HomeMainContentProps {
  userName: string;
}

const HomeMainContent: React.FC<HomeMainContentProps> = ({ userName }) => {
  return (
    <div className="pl-28 pt-12"> {/* Adjusted padding-left and padding-top to move the text left and up */}
      <h1 className="text-[2.75rem] font-normal">
        {userName}'s Fall 2024 schedule builder
      </h1>
      <p className="text-lg mt-[15px]">
        Here's an overview of your degree progress where you can complete tasks and track your progress.
      </p>
    </div>
  );
};

export default HomeMainContent;
