import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import TextForms from './Components/TextForms'
import Alert from './Components/Alert';
import {
 BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './Components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
   useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#060123' : '#e9ecf9';
  }, [mode]);
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#060123';
      showAlert("Dark Mode Enabled","success");
    }else{
       setMode('light');
       document.body.style.backgroundColor='#e9ecf9';
       showAlert("Light Mode Enabled","success");
    }
  }

  const showAlert =(message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null)
    },2000);
  }
  return (
    <>
      
       <Router>
        <Navbar title="Text4You" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <TextForms
                  heading="Enter the text below for analyze:"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
