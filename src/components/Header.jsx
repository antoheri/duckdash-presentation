import { Link } from "react-router-dom";
export default function Header() {
  const location = window.location.href;
  return (
    <header>
      <h1>HES-SO Vs - 64-31 - HTML/CSS/JavaScript</h1>
      <nav>
        <ul>
          <li className="hamburger">
            <img
              src="ressources/images/hamburger_icon.svg"
              alt="haburger logo"
            />
          </li>
          <li className={location.endsWith("/") ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.endsWith("rules") ? "active" : ""}>
            <Link to="/rules">Rules</Link>
          </li>
          <li className={location.endsWith("logbook") ? "active" : ""}>
            <Link to="/logbook">Logbook</Link>
          </li>
          <li className={location.endsWith("skills") ? "active" : ""}>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
