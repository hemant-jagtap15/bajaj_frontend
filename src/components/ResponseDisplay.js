import React, { useState } from "react";
import "./ResponseDisplay.css";

const ResponseDisplay = ({ data }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle multi-select dropdown changes
  const handleSelectionChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Render the data based on selected filters
  const renderData = () => {
    const result = {};

    if (selectedOptions.includes("numbers")) result.numbers = data.numbers;
    if (selectedOptions.includes("alphabets"))
      result.alphabets = data.alphabets;
    if (selectedOptions.includes("highest"))
      result.highest_lowercase_alphabet = data.highest_lowercase_alphabet;

    return result;
  };

  return (
    <div className="response-container">
      <h3>Filter Options</h3>
      <label>
        <input
          type="checkbox"
          value="numbers"
          onChange={handleSelectionChange}
        />
        Numbers
      </label>
      <label>
        <input
          type="checkbox"
          value="alphabets"
          onChange={handleSelectionChange}
        />
        Alphabets
      </label>
      <label>
        <input
          type="checkbox"
          value="highest"
          onChange={handleSelectionChange}
        />
        Highest Lowercase Alphabet
      </label>

      <div>
        <h3>Filtered Data:</h3>
        <pre>{JSON.stringify(renderData(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default ResponseDisplay;
