import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RulesPage() {
  return (
    <div>
      <Header />
      <main>
        <section id="articles">
          <article>
            <header>
              <h2>Game Rules</h2>
            </header>
            <p>Welcome to the rules page of Duck Dash! Here's how to play:</p>
            <ul>
              <li>
                The goal of the game is to navigate the duck through the city
                without getting hit by cars.
              </li>
              <li>
                Use the arrow keys to move the duck forward, backward, and
                sideways.
              </li>
              <li>Avoid all obstacles, including cars, trees, and water.</li>
              <li>
                Each successful passage through the city earns you points.
              </li>
              <li>The game ends when you are hit by an obstacle.</li><br/>
              {}
              <li>To move <strong>forward</strong>, press the Up arrow key.</li>
              <li>To move <strong>backward</strong>, press the Down arrow key.</li>
              <li>To move <strong>left</strong>, press the Left arrow key.</li>
              <li>To move <strong>right</strong>, press the Right arrow key.</li>
              <br/>
              <li>If you want to stop the music, press "M" at anytime</li>
            </ul>
            <p>Have fun and try to beat your high score!</p>
          </article>
        </section>
        <aside>
          <div>
            <h3>Additional Information</h3>
            <p>This page helps you understand the basic rules of the game.</p>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default RulesPage;
