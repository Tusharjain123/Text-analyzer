
import './App.css';
import Navbar from './component/Navbar.js';
import Textform from './component/textform';
function App() {
  return (
    <>
      <Navbar title="Text Analszer" about="More About Me" mode="light" />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
