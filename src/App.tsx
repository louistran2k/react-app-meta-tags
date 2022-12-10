import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MetaDecoration from './MetaDecoration';
import thumbnailImage from './assets/thumbnail.jpg';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import image from './assets/thumbnail.jpg';
const hostName1 = 'https://louistran2k.github.io'


function App() {

  // useEffect(() => {
  //   document.querySelector('title').innerText = 'Your page title'; // Cập nhật thẻ title
  //   document.querySelector('meta[name="description"]').innerText = 'Your page description'; // Cập nhật thẻ meta description
  //   document.querySelector('meta[name="keywords"]').innerText = 'React Helmet, SEO, SPA'; // Cập nhật thẻ meta keywords
  // }, [])

  return (
    <HelmetProvider>
      <div className="App">
        {/* <Helmet>
          <title>
            testing meta tags react
          </title>
          <meta
            name="description"
            content="testing meta tags react"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://louistran2k.github.io/react-app-meta-tags/static/media/thumbnail.4db11d686e435b3f9d98.jpg"
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

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://louistran2k.github.io/react-app-meta-tags/" />
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
            content="https://louistran2k.github.io/react-app-meta-tags/static/media/thumbnail.4db11d686e435b3f9d98.jpg"
          />
        </Helmet> */}
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
