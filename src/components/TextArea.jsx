import React from 'react';

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.name} className='block font-bold mb-2 text-left'>
        {props.labelText}
      </label>
      <textarea
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className='w-full border border-gray-300 p-2 rounded'
      />
    </>
  );
};

export default TextArea;
