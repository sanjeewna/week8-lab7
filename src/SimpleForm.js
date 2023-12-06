// src/SimpleForm.js
import React, { useState } from 'react';

function SimpleForm() {
  // Step 3: Use the useState hook for form state
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>Simple Form</h2>
      {/* Form goes here */}
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default SimpleForm;