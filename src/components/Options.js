export function Options({ options, onOptionClick, selectedOption }) {
  const displayedOptions = selectedOption ? options.filter(o => o === selectedOption) : options;
  return (
    <>
      {displayedOptions.map(option => (
        <div
          className={`options ${selectedOption === option ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onOptionClick(option, e);
          }}
          key={option}
        >
          {option}
          <img src="/icons_assets/chevron.png" width="48px" />
        </div>
      ))}
    </>
  );
}