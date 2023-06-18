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
import Dashboard from './Components/Dashboard';
import BookCart from './Components/BookCart';
import { ErrorPage } from './Components/ErrorPage';
import Stationery from './Components/Stationery';

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
    <Route path="/neet" element={(localStorage.getItem("token"))?<NEET showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/jee" element={(localStorage.getItem("token"))?<JEE showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/stationery" element={(localStorage.getItem("token"))?<Stationery showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/signup" element={(!localStorage.getItem("token"))?<Signup showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/login" element={(!localStorage.getItem("token"))?<Login showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/feedback" element={(localStorage.getItem("token"))?<Feedback showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/dashboard" element={(localStorage.getItem("token"))?<Dashboard showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    <Route path="/bookcart" element={(localStorage.getItem("token"))?<BookCart showAlert={showAlert}/>:<Home showAlert={showAlert}/>}></Route>
    < Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
