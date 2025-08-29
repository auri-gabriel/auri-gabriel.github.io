import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`px-4 py-2 mt-4 border border-gray-700 rounded drop-shadow-md hover:drop-shadow-xl ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
