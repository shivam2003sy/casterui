import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import AdminLoginForm from './components/AdminLoginForm';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element ={<AdminLoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
