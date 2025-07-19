import React, { useState } from "react";

const ServicesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state
  const [selectedOption, setSelectedOption] = useState(""); // Selected option state

  // Dropdown options
  const options = [
    "Social Media Management",
    "FIR Development",
    "Scraping Data",
    "Analyzing",
    "Video Editing",
    "Graphic Designing",
  ];

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          {selectedOption || "Select a Service"}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDropDown;