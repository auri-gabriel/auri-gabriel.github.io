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
  const [errors, setErrors] = useState([]);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError(false);
    setSuccess(false);
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
        if (data.error) {
          setError(true);
          setErrors(data.errors);
        }
        if (data.ok) {
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setErrors([]);
        }
      })
      .catch((err) => {
        setError(true);
        setErrors(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id='contact'
      className='
    w-full
    h-screen
    mx-auto
    text-center
    flex
    flex-col
    justify-between'
    >
      <div className='container mx-auto'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4'>
          Get in Touch
        </h2>
        <div className='flex lg:flex-row'>
          <div className='lg:w-1/2 px-6'>
            <div className='p-6 bg-white shadow-md'>
              <h3 className='text-lg font-medium mb-4'>Social Links</h3>
              <p className='mb-2'>
                <a
                  href='#'
                  className='inline-block mr-4 text-gray-600 hover:text-gray-800'
                >
                  Facebook
                </a>
                <a
                  href='#'
                  className='inline-block mr-4 text-gray-600 hover:text-gray-800'
                >
                  Twitter
                </a>
                <a
                  href='#'
                  className='inline-block text-gray-600 hover:text-gray-800'
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 px-6'>
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
                  errors={errors}
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
                  errors={errors}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
