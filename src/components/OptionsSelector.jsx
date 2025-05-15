import React from 'react';

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const OptionsSelector = ({ setText, text, timer, handleReset, handleTimerClick }) => {
  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    a.click();
  };

  return (
    <div className="options-selector">    
      <button onClick={handleReset} className="button">
        Reset
      </button>

      <button onClick={handleDownload} className="button">
        Download
      </button>

      <div className="timer button" onClick={handleTimerClick}>
        {formatTime(timer)}
      </div>

    </div>
  );
};

export default OptionsSelector; 