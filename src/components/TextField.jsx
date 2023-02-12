import React from 'react';

const TextField = (props) => {
  return (
    <>
      <label htmlFor={props.name} className='block font-bold mb-2'>
        {props.labelText}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className='w-full border border-gray-900 p-2 rounded'
      />
    </>
  );
};

export default TextField;
