// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-transparent text-black p-2 shadow-md flex items-center justify-between mt-[400px]">
      <div className="flex items-center pl-8">
        <img src="/images/logomark.png" alt="Logo" className="h-16 w-16 mr-8" />
      </div>
      <nav className="flex-1 text-center">
        <ul className="inline-flex space-x-8">
          <li><a href="/" className="hover:underline text-black">Home</a></li>
          <li><a href="/community-colleges" className="hover:underline text-black">Community Colleges</a></li>
          <li><a href="/university-courses" className="hover:underline text-black">University Courses</a></li>
          <li><a href="/price-comparison" className="hover:underline text-black">Price Comparison</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
