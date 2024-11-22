import React, { useState } from "react";
import axios from "axios"; // Import axios for making API calls
import ResponseDisplay from "./ResponseDisplay"; // Import ResponseDisplay component
import "./InputForm.CSS"; // Import CSS for InputForm styling

const InputForm = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Validate and parse JSON input
      const parsedInput = JSON.parse(jsonInput);

      // Ensure parsedInput contains "data" and "file_b64"
      if (!parsedInput.hasOwnProperty("data")) {
        setError("Input must contain a 'data' property");
        return;
      }
      console.log(parsedInput);

      // Send POST request to backend
      const response = await axios.post(
        "https://bajaj-backend-8268.onrender.com/bfhl",
        parsedInput
      );

      setResponseData(response.data); // Save the API response
      setError(""); // Clear the error message
    } catch (err) {
      setError("Invalid JSON or API error"); // Handle any error
    }
  };

  return (
    <div className="form-container">
      <textarea
        className="json-input"
        placeholder="Enter JSON data"
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)} // Update state on input change
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Show error if invalid */}
      {responseData && <ResponseDisplay data={responseData} />}
    </div>
  );
};

export default InputForm;
