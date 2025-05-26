import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import TextForms from './Components/TextForms'

function App() {
  const [mode, setMode] = useState("light");
   useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#060123' : '#e9ecf9';
  }, [mode]);
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#060123';
    }else{
       setMode('light');
       document.body.style.backgroundColor='#e9ecf9';
    }
  }
  return (
    <>
      <Navbar title="Text4You" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForms heading="Enter the text below for analyze: "  mode={mode}/>
      </div>
    </>
  )
}

export default App
