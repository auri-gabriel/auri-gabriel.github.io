import React from 'react';

const TextField = (props) => {

  let error = false;
  const fieldErrors = props.errors.filter(error => error.field === props.name);

  if (props.errors) {
    if (fieldErrors.length > 0) {
      error = true;
    }
  }
  return (
    <>
      <label htmlFor={props.name} className={`block font-bold mb-2 text-left`}>
        {props.labelText}
      </label>
      <input
        formNoValidate
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className={`w-full border border-gray-300 p-2 rounded-lg ${error ?  'border-2 border-red-300 text-red-900' : ''}`}
      />
      <label htmlFor={props.name} className={`block mb-2 text-left ${error ? 'text-red-600' : ''}`}>
        {fieldErrors.length > 0 && (
        <ul className="list-disc pl-5 mt-1 text-left">
          {fieldErrors.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      )}
      </label>
    </>
  );
};

export default TextField;
