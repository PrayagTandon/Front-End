import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // FUNTION TO HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  // FUNCTION TO PREVEN FORMS DEFAULT BEHAVIOUR
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  // FUNCTION TO RESET NAME AND EMAIL
  const handleReset = () => {
    setName('');
    setEmail('');
  };

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline', marginBottom: '32px' }}>React Input Events and Forms</h1>
      <form onSubmit={handleSubmit}>
        {/* NAME INPUT FIELD */}
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            style={{
              padding: '6px',
              borderRadius: '4px',
              margin: '16px'
            }}
            value={name}
            onChange={handleInputChange}
          />
        </label>
        {/* EMAIL INPUT FIELD */}
        <label>
          Email:
          <input
            type='email'
            name='email'
            placeholder='Enter your name'
            style={{
              padding: '6px',
              borderRadius: '4px',
              marginInline: '16px'
            }}
            value={email}
            onChange={handleInputChange}
          />
        </label>
        {/* SUBMIT BTN */}
        <button
          type='submit'
          style={{
            display: 'inline-block',
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: 'greenyellow',
            marginRight: '24px'
          }}
        >Submit</button>
        {/* RESET BTN */}
        <button
          type='reset'
          style={{
            display: 'inline-block',
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: 'red',
            color: 'whitesmoke'
          }}
          onClick={handleReset}
        >Reset</button>
      </form>
      <p style={{ fontSize: '16px', fontWeight: 'bold' }}> Name: {name}</p>
      <p style={{ fontSize: '16px', fontWeight: 'bold' }}> Email: {email}</p>
    </div>
  );
}

export default App;