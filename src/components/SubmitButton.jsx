import React from 'react';

const SubmitButton = ({ isLoading, success, error }) => {
  let baseClassName = 'text-center justify-center w-32 px-4 py-2 inline-flex items-center rounded font-semibold leading-6 text-md shadow rounded-md'
  let className = `${baseClassName} bg-blue-500 text-white hover:bg-blue-400 transition ease-in-out duration-150`;
  let text = 'Submit';

  if (isLoading) {
    className = `${baseClassName} bg-gray-500 text-white`;
    text = <>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
      </>
  } else if (success) {
    className = `${baseClassName}  bg-green-500 text-white`;
    text = 'Success';
  } else if (error) {
    className = `${baseClassName}  bg-red-500 text-white`;
    text = 'Error';
  }

  return (
    <div className='text-center'>
      <button type='submit' className={className}>
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
