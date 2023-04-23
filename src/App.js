
import { useState } from 'react';
import './App.css';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '	#36454F';
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  }
  return (
    <>
     <Navbar title="Text-Editor" mode={mode} toggleMode={toggleMode} key={new Date()} aboutText="About-TextEditor"/>
    <div className='container my-3'>
    <TextForm  heading="Enter The Text to Analyze"/>
    {/* <About/> */}
    </div>

     
    </>
  );
}

export default App;
