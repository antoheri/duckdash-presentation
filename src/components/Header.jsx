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
          <li className={location.endsWith("index.html") ? "active" : ""}>
            <a href="index.html">Description</a>
          </li>
          <li className={location.endsWith("sketch.html") ? "active" : ""}>
            <a href="sketch.html">Sketch</a>
          </li>
          <li className={location.endsWith("mockup.html") ? "active" : ""}>
            <a href="mockup.html">Mockup</a>
          </li>
          <li className={location.endsWith("flow.html") ? "active" : ""}>
            <a href="flow.html">Flow</a>
          </li>
          <li className={location.endsWith("logbook.html") ? "active" : ""}>
            <a href="logbook.html">Logbook</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
