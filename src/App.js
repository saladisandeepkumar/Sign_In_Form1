import React from 'react'
import { BrowserRouter as Router,RouterProvider,Route } from 'react-router-dom';
import Login from "./login.js";
import Signup from './Signup.js';
import Home from './Home';
import Login from './login.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;