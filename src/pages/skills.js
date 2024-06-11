import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SkillsPage() {
  return (
    <div>
      <Header />
      <main>
        <section id="articles">
          <article>
            <header>
              <h2>Skills Overview</h2>
              <p>Overview of all implemented skills and their details</p>
            </header>
            <table>
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Implementation</th>
                  <th>Code Location</th>
                  <th>Screenshot</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML Forms Elements</td>
                  <td>
                    x (form with HTML input and validation see optional JS)
                  </td>
                  <td>login.html line: 17-20</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/HTML_Form.png"
                      alt="HTML Forms Elements Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Medias & API</td>
                  <td>x (canvas AND audio or video)</td>
                  <td>file.js line: XXX</td>
                  <td>
                    <img
                      src="/path_to_screenshot2.png"
                      alt="Medias & API Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>DOM Handling Functions</td>
                  <td>x (min. getElementById())</td>
                  <td>login.html line: 30-35</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/DOM_handling_function.png"
                      alt="DOM Handling Functions Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Loop & iterators</td>
                  <td>x (loop on object)</td>
                  <td>main.js line: 76-82</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Loop_iterator.png"
                      alt="Loop & iterators Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Types of functions</td>
                  <td>x (standard function with parameters and method)</td>
                  <td>
                    Environment.js line: 123-141 <br />
                    main.js line: 42-44{" "}
                  </td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Standard_function.png"
                      alt="Standard Function Screenshot"
                    />
                    <br />
                    <img
                      src="/ressources/skillsImg/Anonyme_function.png"
                      alt="Anonyme Function Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Types de stockages (bonus)</td>
                  <td>x (local storage)</td>
                  <td>choose_character.js line: 46-53</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Stockage_type.png"
                      alt="Types de Stockages Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Callback</td>
                  <td>x (either by use of API or own construction)</td>
                  <td>Obstacles.js line: 21-28</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/CallBack.png"
                      alt="Callback Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Drag'n Drop</td>
                  <td>x (Building an avatar)</td>
                  <td>choose_character.js line: 26-44</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/DragDrop.png"
                      alt="Drag'n Drop Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ajax</td>
                  <td>OPTIONAL (Game setup)</td>
                  <td>login.html line: 50-74</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Ajax.png"
                      alt="Ajax Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Several variable scope in JS</td>
                  <td>x (implicit)</td>
                  <td>main.js line: 5-27</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Several_varaible_scope_JS.png"
                      alt="Several Variable Scope in JS Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Natives Libraries</td>
                  <td>x (min. Math)</td>
                  <td>main.js line: 85-86</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Natives Libraries.png"
                      alt="Natives Libraries Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Variable comparison operators</td>
                  <td>x (implicit)</td>
                  <td>main.js line: 87-95</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Variable_Comp_operator.png"
                      alt="Variable Comparison Operators Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>JSON</td>
                  <td>OPTION (Game setup et React JS website)</td>
                  <td>score.js line: 16-24</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/JSON.png"
                      alt="JSON Screenshot"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Geolocalisation</td>
                  <td>x (Implicit)</td>
                  <td>login.html line: 38-47</td>
                  <td>
                    <img
                      src="/ressources/skillsImg/Geolocalisation.png"
                      alt="Geolocalisation Screenshot"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SkillsPage;
