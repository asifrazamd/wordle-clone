// src/components/Message.jsx
import React from 'react';

function Message({ message }) {
  return (
    // Display the message passed as a prop, with some styling
    <div className="mt-4 text-xl">
      {message}  {/* The message passed down from the parent component (e.g., win/loss message) */}
    </div>
  );
}

export default Message;
