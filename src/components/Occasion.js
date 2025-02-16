import { useState } from "react";
import { Options } from "./Options";

export default function Occasion({ occasion, setOccasion }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setOccasion(!occasion);
  };

  return (
    <div id="occasion" onClick={handleToggle}>
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

      {occasion && (
        <div className="options-dropdown">
          <Options setOption={setSelectedOption} />
        </div>
      )}

      {selectedOption && (
        <div className="options">
          Selected Option: {selectedOption}
        </div>
      )}
    </div>
  );
}