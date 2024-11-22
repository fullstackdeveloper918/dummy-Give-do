import React from 'react';

export const Button = ({ text, className }) => {
  return (
    <div className="gap-2">
      <button
        type="button"
        className={`px-5 py-3 rounded-lg font-bold ${className}`}
      >
        {text}
      </button>
    </div>
  );
};
