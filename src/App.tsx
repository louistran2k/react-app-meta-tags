import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetaDecoration from './MetaDecoration';
import thumbnailImage from './assets/thumbnail1.png';

function App() {
  return (
    <div className="App">
      <MetaDecoration 
        title="testing meta tag react app"
        description="testing meta tag react app"
        imageUrl={thumbnailImage}
        imageAlt="thumbnail"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
