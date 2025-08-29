import React from 'react';

const Pill = (props) => {
  return (
    <button
      className={`
      mx-1
      my-1
      p-2
      px-4
      border
      rounded-full 
      hover:drop-shadow-md
      ${
        props.active
          ? 'bg-primary-blue text-white border-transparent'
          : 'bg-transparent border text-black border-black'
      }
      `}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Pill;
