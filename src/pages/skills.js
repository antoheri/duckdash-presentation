import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skill from "../components/Skill";
import skillsData from "../datas/skills";

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
            <table className="skill">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Implementation</th>
                  <th>Code Location</th>
                  <th>Screenshot</th>
                </tr>
              </thead>
              <tbody>
                {skillsData.map((skill, index) => (
                  <Skill
                    key={index}
                    skill={skill.skill}
                    implementation={skill.implementation}
                    location={skill.location}
                    image={skill.image}
                  />
                ))}
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
