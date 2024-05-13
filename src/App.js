import './App.css';
import Navbar from './components/Navbar';
import TextFom from './components/TextFom';

function App() {
  return (
  <>
  <Navbar title = "TextUtils" aboutText = "Aboutus" />
  <div className="container my-5">
  <TextFom heading = "Enter Your Text Here" />
  </div>
  </>
  );
}

export default App;
