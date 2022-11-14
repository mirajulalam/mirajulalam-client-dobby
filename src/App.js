import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Shared/Login/Login';
import SignUp from './components/Shared/SignUp/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
