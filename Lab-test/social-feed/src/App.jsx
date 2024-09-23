import React from 'react';
import Feed from './components/Feed';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <div>

      <h1>Hello, Social Media</h1>

      <Feed />
      <Post />
    </div>
  );
}

export default App;