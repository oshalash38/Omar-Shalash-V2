import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AccessRequestModal({ modalId, repoName }) {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the field
    setFormData((prevData) => ({
      ...prevData, // Spread previous data to maintain other field values
      [name]: value, // Update the current field value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      formData.repoName = repoName;
      console.log(formData);

      const response = await axios.post(
        'https://github-private-access-request-api.omarshalash.com/submit-request',
        formData
      );
      setMessage('Request submitted successfully!');
      console.log('Success:', response.data);
      setFormData({});
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message
      );
      setMessage('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className='modal fade'
      id={modalId}
      tabIndex='-1'
      aria-labelledby={`${modalId}-label`}
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id={`${modalId}-label`}>
              Access Request
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <p>
              This project's GitHub repository is private. To request access,
              please complete and submit this form. Make sure to include your
              full name, GitHub username and a brief explanation of the reason
              for your request.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name:
                </label>
                <input
                  type='text'
                  id='name'
                  name='requesterName'
                  className='form-control'
                  value={formData.requesterName || ''}
                  onChange={handleChange}
                  placeholder='Enter your full name'
                  pattern='[a-zA-Z0-9-_]+'
                  required
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>
                  Username
                </label>
                <input
                  type='text'
                  name='githubUsername'
                  value={formData.githubUsername || ''}
                  className='form-control'
                  onChange={handleChange}
                  id='username'
                  placeholder="Enter your GitHub's username"
                  required
                  pattern='[a-zA-Z0-9-_]+'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  rows='3'
                  placeholder='Reason for access'
                  name='reason'
                  value={formData.reason || ''}
                  onChange={handleChange}
                  required
                  pattern='[a-zA-Z0-9-_]+'
                ></textarea>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='submit'
                  disabled={loading}
                  className='btn btn-dark'
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
                {message && <p>{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessRequestModal;
