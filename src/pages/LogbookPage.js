import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';  // Assurez-vous que le chemin est correct

function LogbookPage() {
    return (
        <div>
            <header style={{ backgroundImage: 'url(/ressources/headerBackground2.png)' }}>
                <h1>HES-SO Vs - 64-31 - HTML/CSS/JavaScript</h1>
                <nav>
                    <ul>
                        <li><img src="/ressources/hamburger_icon.svg" alt="Menu"/></li>
                        <li><Link to="/">HomePage</Link></li>
                        <li><Link to="/rules">Rules</Link></li>
                        <li className="active"><Link to="/logbook">Logbook</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="articles">
                    <article>
                        <header>
                            <h2>Logbook of your project</h2>
                        </header>
                        <section className="journal">
                            <div className="log">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Activity</th>
                                        <th>Duration</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>10.03.2024</td>
                                        <td>Creating a first version of the CSS design.</td>
                                        <td>5 hours</td>
                                        <td>Making a design inspired by the model while learning CSS and publish the page through pages on github.</td>
                                    </tr>
                                    <tr>
                                        <td>25.03.2024</td>
                                        <td>Finish the mockup and all the design</td>
                                        <td>15 hours</td>
                                        <td>Creating the first design of a maximum of elements that will be part of the game</td>
                                    </tr>
                                    <tr>
                                        <td>29.03.2024</td>
                                        <td>Writing all the text for each pages</td>
                                        <td>4 hours</td>
                                        <td>Composing and finalizing all the textual content for the various pages of the game, ensuring clarity and engagement</td>
                                    </tr>
                                    <tr>
                                        <td>04.04.2024</td>
                                        <td>Text correction</td>
                                        <td>2 hours</td>
                                        <td>Revision and enhancement of descriptive texts and game instructions.</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </article>
                </section>
                <aside>
                    <div>
                        <h3>Summary of project data</h3>
                        <ul>
                            <li><strong>Total time of project</strong>: XX hours</li>
                            <li><strong>Other data: ...</strong></li>
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

export default LogbookPage;
