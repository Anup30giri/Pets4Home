
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/register' exact element={<Signup />} />
        <Route path='/login' exact element={<Login />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
