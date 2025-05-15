import React from 'react';

const FontSelector = ({ fonts, selectedFont, setSelectedFont }) => {
  return (
    <div className="font-selector">
      {fonts.map(font => (
        <button
          key={font}
          onClick={() => setSelectedFont(font)}
          className="button"
        >
          {font}
        </button>
      ))}
    </div>
  );
};

export default FontSelector; 