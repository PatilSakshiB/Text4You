import Navbar from './Components/Navbar'
import TextForms from './Components/TextForms'

function App() {
  return (
    <>
      <Navbar title="Text4You"/>
      <div className="container my-4">
        <TextForms heading="Enter the text below for analyze: "/>
      </div>
    </>
  )
}

export default App
