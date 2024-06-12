import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <section id="articles">
          <article>
            <header>
              <h2>Description of Your Game Project: Duck Dash Adventure</h2>
            </header>
            <p>
              Embark on an adventure with Duck Dash, an inspired take on the
              classic Crossy Road, starring a wily duck against the city. Test
              your dexterity and adventurous spirit as you navigate through a
              world full of unpredictable obstacles. The city is your
              playground, and every move is key to your quest.
            </p>
            <br/>
            <p>
              <strong>Goal of the Game:</strong><br/>
              <br/> Navigate the duck through various urban landscapes,
              avoiding obstacles to achieve high scores.{" "}
              <br/>
            </p>
            <br/>
            <p>
              <strong>Character Overview:</strong><br/>
              <br/> Choose your feathered hero at the beginning of the game.
              Each duck comes with its own unique colors, ready to face the
              urban jungle. Their adventures are filled with challenges that
              test their agility and resolve, making each choice a distinct
              experience.
            </p>
            <br/>

            <p>
              <strong>Game Rules:</strong><br/>
            </p>
            <ul>
              <li>
                Use the arrow keys to guide your duck through the urban and
                riverside obstacles.
              </li>
              <li>
                Navigate swiftly to dodge fast-moving cars. Getting hit will
                cost you a life.
              </li>
              <li>
                Jump onto floating logs to safely cross the rivers. Miss a log,
                and you might find yourself taking an unplanned swim.
              </li>
            </ul>
            <br/>
            <p>
              Master these controls to maximize your score and survive longer in
              the game's challenging environments.
            </p>
            <br/>
            <p>
              Your goal is to survive as long as possible in an endless journey,
              where each game is a chance to outdo your past achievements. Avoid
              cars that dot your path. Challenges abound at every turn,
              requiring agility and foresight. Strategize and use the city's
              space to your advantage to push the boundaries.
            </p>
            <br/>
            <p>
              Duck Dash awaits you for sessions full of twists and turns. Get
              ready to guide your duck through the urban maze and discover just
              how far you can go. Take on the challenge and beat the high score!
            </p>
            <br/>
            <p>
              <strong>Link :</strong><br/>
              <br/> Find here the different important link <br/>
              <br/> <a className="button" href="https://github.com/antoheri/duckdash-presentation"> GitHub </a>
              <br/> <a className="button" href="https://github.com/antoheri/duckdash-presentation"> Game </a>
            </p>
          </article>
        </section>
        <aside>
          <div>
          <h3>Datasheet</h3>
            <ul>
              <li>
                <strong>Antoine Héritier</strong>
              </li>
              <li>
                <strong>Yannick Christen</strong>
              </li>
              <li>
                <strong>Marc Vergères</strong>
              </li>
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
