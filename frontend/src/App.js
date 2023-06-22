import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/components/Home'
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';
import InProgress from './pages/InProgress';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/StartPage' element={<StartPage />}/>
          <Route path='/LoginPage' element={<LoginPage />}/>
          <Route path='/InProgress' element={<InProgress />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;