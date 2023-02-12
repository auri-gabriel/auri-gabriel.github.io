import React from 'react';

const Pill = (props) => {
  return (
    <button
      className={`
      rounded-full
      mx-1
      my-1
      p-2
      px-4
      border 
      hover:drop-shadow-md
      ${
        props.active
          ? 'bg-gray-900 text-white border-transparent'
          : 'bg-transparent border border-gray-900'
      }
      `}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Pill;
