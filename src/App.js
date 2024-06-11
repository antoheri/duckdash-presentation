import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import RulesPage from "./pages/rules";
import LogbookPage from "./pages/logbook";
import SkillsPage from "./pages/skills";
import GamePage from "./pages/gamePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/logbook" element={<LogbookPage />} />
        <Route path="/skills" element={<SkillsPage />} />
          <Route path="/gamePage" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
