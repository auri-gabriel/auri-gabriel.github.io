import React, { useState } from 'react';
import TextField from '../components/TextField';
import TextArea from '../components/TextArea';
import SubmitButton from '../components/SubmitButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch('https://formspree.io/f/mjvdypgl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4'>
          Get in Touch
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className='mb-4'>
            <TextField
              labelText='Name'
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full border border-gray-400 p-2'
            />
          </div>
          <div className='mb-4'>
            <TextField
              labelText='Email'
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full border border-gray-400 p-2'
            />
          </div>
          <div className='mb-4'>
            <TextArea
              labelText='Message'
              name='message'
              id='message'
              value={formData.message}
              onChange={handleInputChange}
              className='w-full border border-gray-400 p-2'
            />
          </div>
          <div className='text-center'>
            <SubmitButton
              isLoading={isLoading}
              success={success}
              error={error}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
