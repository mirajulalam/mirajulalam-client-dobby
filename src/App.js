import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllTask from './components/AllTask/AllTask';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Login from './components/Shared/Login/Login';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import SignUp from './components/Shared/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
      } />
        <Route path="/alltask" element={
          <PrivateRoute>
            <AllTask/>
          </PrivateRoute>
        
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
