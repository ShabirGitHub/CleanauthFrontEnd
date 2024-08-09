
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import BalancePage from './components/BalancePage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/balance" element={<BalancePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
