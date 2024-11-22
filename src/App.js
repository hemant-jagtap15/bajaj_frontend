import React from "react";
import InputForm from "./components/InputForm"; // Import the InputForm component
import "./App.css"; // Import CSS for styling

function App() {
  return (
    <div className="App">
      <h1 className="header">User Data Submission</h1>
      <InputForm /> {/* Render InputForm component */}
    </div>
  );
}

export default App;
