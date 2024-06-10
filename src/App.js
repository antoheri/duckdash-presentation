import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RulesPage from './pages/RulesPage';
import LogbookPage from './pages/LogbookPage';
import SkillsPage from './pages/SkillsPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/rules" element={<RulesPage />} />
                <Route path="/logbook" element={<LogbookPage />} />
                <Route path="/skills" element={<SkillsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
