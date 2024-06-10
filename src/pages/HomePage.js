import React from "react";
import { Link } from 'react-router-dom'; // Importer Link de react-router-dom
import '../style.css';

function HomePage() {
    return (
        <div>
            <header style={{ backgroundImage: 'url(/ressources/headerBackground2.png)' }}>
                <h1>HES-SO Vs - 64-31 - HTML/CSS/JavaScript</h1>
                <nav>
                    <ul>
                        <li><img src="/ressources/hamburger_icon.svg" alt="Menu"/></li>
                        <li className="active"><Link to="/">HomePage</Link></li>
                        <li><Link to="/rules">Rules</Link></li>
                        <li><Link to="/logbook">LogBook</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="articles">
                    <article>
                        <header>
                            <h2>Description of Your Game Project: Duck Dash Adventure</h2>
                            <p>By Jean Dupont on February 5th, 2019 at 09:00</p>
                        </header>
                        <p>Embark on an adventure with Duck Dash, an inspired take on the classic Crossy Road, starring
                            a wily duck against the city. Test your dexterity and adventurous spirit as you navigate
                            through a world full of unpredictable obstacles. The city is your playground, and every move
                            is key to your quest.</p>
                        <br/>
                        <p><strong>Goal of the Game:</strong><br/> Navigate the duck through various urban
                            landscapes, avoiding obstacles to achieve high scores. </p>
                        <br/>
                        <p><strong>Character Overview:</strong><br/> Choose your feathered hero at the beginning of the
                            game.
                            Each duck comes with its
                            own unique colors, ready to face the urban jungle. Their adventures are filled with
                            challenges
                            that test their agility and resolve, making each choice a distinct experience.</p>
                        <br/>

                        <p><strong>Game Rules:</strong></p>
                        <ul>
                            <li>Use the arrow keys to guide your duck through the urban and
                                riverside obstacles.
                            </li>
                            <li>Navigate swiftly to dodge fast-moving cars. Getting hit
                                will cost you a life.
                            </li>
                            <li>Jump onto floating logs to safely cross the rivers. Miss
                                a log, and you might find yourself taking an unplanned swim.
                            </li>
                        </ul>
                        <br/>
                        <p>Master these controls to maximize your score and survive longer in the game's challenging
                            environments.</p>
                        <br/>
                        <p>Your goal is to survive as long as possible in an endless journey, where each game
                            is a chance to outdo your past achievements. Avoid cars that dot your path.
                            Challenges abound at every turn, requiring agility and foresight. Strategize
                            and use the city's space to your advantage to push the boundaries.</p>
                        <br/>
                        <p>Duck Dash awaits you for sessions full of twists and turns. Get ready to guide your duck
                            through
                            the urban maze and discover just how far you can go. Take on the challenge and beat the high
                            score!</p>

                    </article>
                </section>
                <aside>
                    <div>
                        <h3>Datasheet</h3>
                        <ul>
                            <li><strong>Antoine Héritier</strong></li>
                            <li><strong>Yannick Christen</strong></li>
                            <li><strong>Marc Vergères</strong></li>
                        </ul>
                    </div>
                </aside>
            </main>
            <footer>
                <img src="/ressources/logo.png" alt="Logo" />
            </footer>
        </div>
    );
}

export default HomePage;
