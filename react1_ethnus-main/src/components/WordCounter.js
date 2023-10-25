import React, { useState } from 'react';
import './WordCounter.css'; // Import the CSS file

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter-container">
      <h1>Responsive Paragraph Word Counter</h1> {/* Add the heading */}
      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
        style={{ width: '70%' }}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
