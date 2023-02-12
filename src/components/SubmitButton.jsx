import React from 'react';

const SubmitButton = ({ isLoading, success, error }) => {
  let className = 'bg-blue-500 text-white p-2 rounded-b';
  let text = 'Submit';

  if (isLoading) {
    className = 'bg-gray-500 text-white p-2';
    text = <span className='spinner' />;
  } else if (success) {
    className = 'bg-green-500 text-white p-2';
    text = <span className='checkmark' />;
  } else if (error) {
    className = 'bg-red-500 text-white p-2';
    text = <span className='cross' />;
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
