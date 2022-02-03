import "./sidebar.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
  <div className="sidebar">
    <div className="sidebar-1">
    <h2>Main Menu</h2>
    <Router>
    <h3><i class="fas fa-columns"></i><Link to="/dashboard">Dashboard</Link></h3>
    <h3><i class="fab fa-discourse"></i><Link to="/courses">Courses</Link></h3>
    <h3><i class="fas fa-suitcase"></i><Link to="/teamsandmentor">Teams & Mentor</Link></h3>
    <h3><i class="far fa-id-badge"></i><Link to="/badges">Badges</Link></h3>
    <h3><i class="far fa-lightbulb"></i><Link to="/ideas">Ideas</Link></h3>
    </Router>
    </div>
    <div className="sidebar-2">
      <h2 className="sidebar-heading">General</h2>
      <Router>
      <h3><i class="fas fa-cog"></i><Link to="/settings">Settings</Link></h3>
      <h3><i class="fas fa-question-circle"></i><Link to="/help">Help</Link></h3>
      <h3><i class="fas fa-sign-out-alt"></i><Link to="/logout">Logout</Link></h3>
      </Router>
    </div>
  </div>
  </>
  )
};

export default Sidebar;
