import React from 'react';

const TextArea = (props) => {
  return (
    <>
      <label htmlFor={props.name} className='block font-bold mb-2'>
        {props.labelText}
      </label>
      <textarea
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className='w-full border border-gray-900 p-2 rounded'
      />
    </>
  );
};

export default TextArea;
