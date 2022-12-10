import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetaDecoration from './MetaDecoration';
import thumbnailImage from './assets/thumbnail.jpg';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import image from './assets/thumbnail.jpg';
const hostName1 = 'https://louistran2k.github.io'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>
            testing meta tags react
          </title>
          <meta
            name="description"
            content="testing meta tags react"
          />

          {/* Twitter meta tags below */}
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content={hostName1 + image}
          />
          <meta
            name="twitter:title"
            content="Design+Code - testing meta tags react"
          />
          <meta name="twitter:creator" content="@diepsteph" />
          <meta name="twitter:site" content="@diepsteph" />
          <meta
            name="twitter:description"
            content="Design+Code - testing meta tags react description"
          />

          {/* Facebook meta tags below */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={hostName1} />
          <meta
            property="og:title"
            content="Design+Code - Learn to design and code React and Swift apps"
          />
          <meta
            property="og:description"
            content="Learn design and code by building real apps with React and Swift. Complete courses about UI design, web and iOS development using Figma, CSS, React Hooks and SwiftUI."
          />
          <meta
            property="og:image"
            content={hostName1 + image}
          />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.7
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
    </HelmetProvider>
  );
}

export default App;
