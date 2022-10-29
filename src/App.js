import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import NEET from './Components/NEET';
import JEE from './Components/JEE';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Alert from './Components/Alert';
import Feedback from './Components/Feedback';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  return (
    <>
    <Router>
    <Navbar showAlert={showAlert}/>
    <Alert alert={alert}/>
    <Routes>
    <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
    <Route path="/about" element={<About showAlert={showAlert}/>}></Route>
    <Route path="/neet" element={<NEET showAlert={showAlert}/>}></Route>
    <Route path="/jee" element={<JEE showAlert={showAlert}/>}></Route>
    <Route path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
    <Route path="/login" element={<Login showAlert={showAlert}/>}></Route>
    <Route path="/feedback" element={<Feedback showAlert={showAlert}/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
