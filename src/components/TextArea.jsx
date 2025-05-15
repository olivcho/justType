import React from 'react';

const TextArea = ({ text, setText, selectedFont }) => {
  return (
    <textarea
      className="text"
      placeholder="Share your thoughts..."
      autoFocus
      autoComplete="off"
      spellCheck="false"
      style={{ fontFamily: selectedFont }}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextArea; 