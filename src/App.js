import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import Submissions from './Components/Submissions';
function App() {
  // localStorage.clear()
  return (

        <Router>
          <Routes>
          <Route path="/" element={<ContactForm/>} />
          <Route path="/submissions" element={<Submissions/>} />
          </Routes>
        </Router>

  );
}

export default App;
