import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import Header from "./Header";
import About from "./About"
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
    
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
