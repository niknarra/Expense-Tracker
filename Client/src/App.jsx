import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../pages/auth/index.jsx";
import Dashboard from "../pages/dashboard/index.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
