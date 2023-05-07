import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  useEffect(() => {
    return () => {
      let savedMode = localStorage.getItem('mode');
      console.log(savedMode);
      if(savedMode != null){
        setMode(savedMode);
        if(savedMode === 'dark') document.body.style.backgroundColor = '#042743';
        if(savedMode === 'light') document.body.style.backgroundColor = 'white';
      } else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }
  }, [])
  
  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled!", "success");
      localStorage.setItem("mode", "dark");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!", "success");
      localStorage.setItem("mode", "light");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <Routes>
        <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
