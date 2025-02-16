export function Options({ setOption }) {
  const handleOptionClick = (option) => {
    setOption(option);
  };

  return (
    <ul>
    <div className="options">
      <li onClick={() => handleOptionClick("Option 1")}>Option 1</li>
      <li onClick={() => handleOptionClick("Option 2")}>Option 2</li>
      <li onClick={() => handleOptionClick("Option 3")}>Option 3</li>
      </div>
    </ul>
  );
}