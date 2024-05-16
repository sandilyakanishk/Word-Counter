import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFom from './components/TextFom';
import React, {useState} from 'react';

function App() {
  const [mode , setMode] = useState('light');
  
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#020650';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
  <>
  <Navbar title = "TextUtils" aboutText = "Aboutus" mode={mode} toggleMode={toggleMode} />
  <div className="container my-5">
  <TextFom heading = "Enter Your Text Here" mode={mode}/>
  </div>
  {/* <div className="container">
    <About/>
  </div> */}
  </>
  );
}

export default App;
