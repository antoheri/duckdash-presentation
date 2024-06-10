import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style.css'; // Ensure the path is correct

function RulesPage() {
    return (
        <div>
            <header style={{ backgroundImage: 'url(/ressources/headerBackground2.png)' }}>
                <h1>HES-SO Vs - 64-31 - HTML/CSS/JavaScript</h1>
                <nav>
                    <ul>
                        <li><img src="/ressources/hamburger_icon.svg" alt="Menu"/></li>
                        <li><Link to="/">HomePage</Link></li>
                        <li className="active"><Link to="/rules">Rules</Link></li>
                        <li><Link to="/logbook">LogBook</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="articles">
                    <article>
                        <header>
                            <h2>Game Rules</h2>
                            <p>By Jean Dupont on February 5th, 2019 at 09:00</p>
                        </header>
                        <p>Welcome to the rules page of Duck Dash! Here's how to play:</p>
                        <ul>
                            <li>The goal of the game is to navigate the duck through the city without getting hit by cars.</li>
                            <li>Use the arrow keys to move the duck forward, backward, and sideways.</li>
                            <li>Avoid all obstacles, including cars, trees, and water.</li>
                            <li>Each successful passage through the city earns you points.</li>
                            <li>The further you go, the more challenging the game becomes.</li>
                            <li>The game ends when you are hit by an obstacle.</li>
                            {}
                            <li>To move forward, press the Up arrow key.</li>
                            <li>To move backward, press the Down arrow key.</li>
                            <li>To move left, press the Left arrow key.</li>
                            <li>To move right, press the Right arrow key.</li>
                        </ul>
                        <p>Have fun and try to beat your high score!</p>
                    </article>
                </section>
                <aside>
                    <div>
                        <h3>Additional Information</h3>
                        <p>This page helps you understand the basic rules of the game.</p>
                        <p>For more details, visit our FAQ or contact us.</p>
                    </div>
                </aside>
            </main>
            <footer>
                <img src="/ressources/logo.png" alt="Logo" />
            </footer>
        </div>
    );
}

export default RulesPage;
