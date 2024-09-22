import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  // FUNTION TO HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline', marginBottom: '32px' }}>React Input Events and Forms</h1>
      <input
        type='text'
        placeholder='Enter your name'
        style={{
          padding: '6px',
          borderRadius: '4px',
          marginInline: '16px'
        }}
        value={name}
        onChange={handleInputChange}
      />
      <p style={{ fontSize: '16px', fontWeight: 'bold' }}> Hello, {name}</p>
    </div>
  );
}

export default App;