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
              <p>By Jean Dupont on February 5th, 2019 at 09:00</p>
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
              <li>
                The further you go, the more challenging the game becomes.
              </li>
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
      <Footer />
    </div>
  );
}

export default RulesPage;
