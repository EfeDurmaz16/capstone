import { useState } from "react";
import { Options } from "./Options";

export default function Occasion() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const options = ["Birthday", "Engagement", "Anniversary"];

  const handleToggle = (e) => {
    e.stopPropagation();
    
    if (selectedOption) {
      setSelectedOption(null);
      setShowDropdown(false);
    } else {
      setShowDropdown(prev => !prev);
    }
  };

  // Updated function: reset state if the clicked option is already selected
  const handleOptionSelect = (option, e) => {
    e.stopPropagation();
    if (selectedOption === option) {
      setSelectedOption(null);
      setShowDropdown(true);
      e.target.parentElement.style = "margin-top: 20px";

    } else {
      e.target.parentElement.style = "margin-top: 0px";
      setSelectedOption(option);
      setShowDropdown(false);
    }
  };

  return (
    <div id="occasion" onClick={handleToggle}>
      {!selectedOption && (
        <>
          <img
            src="/icons_assets/image.png"
            width="48px"
            id="cheers"
            alt="Cheers Icon"
          />
          <span>Occasion</span>
          <img
            src="/icons_assets/chevron.png"
            width="48px"
            id="chevron"
            alt="Chevron Icon"
          />
        </>
      )}
      {(showDropdown || selectedOption) && (
        <div className="options-dropdown">
          <Options
            options={options}
            onOptionClick={handleOptionSelect}
            selectedOption={selectedOption}
          />
        </div>
      )}
    </div>
  );
}