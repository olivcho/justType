import React from 'react';

const Interact = ({ handleShare, handleRead }) => {
  return <div className="interact">
    <button className="button" onClick={handleShare}>Share</button>
    <button className="button" onClick={handleRead}>Read</button>
  </div>
};

export default Interact;