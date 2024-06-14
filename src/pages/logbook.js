import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logsData from "../datas/logs";
import Log from "../components/Log";

function getTotalDuration(logs) {
  let totalDuration = 0;
  logs.forEach((log) => {
    totalDuration += parseInt(log.Duration);
  });
  return totalDuration;
}

let totalDuration = getTotalDuration(logsData);

function LogbookPage() {
  return (
    <div>
      <Header />
      <main>
        <section id="articles">
          <article>
            <header>
              <h2>Logbook of your project</h2>
            </header>
            <section className="journal">
              <div className="log">
                <table className="log">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Activity</th>
                      <th>Duration</th>
                      <th>Description</th>
                      <th>Participants</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logsData
                      .sort((a, b) => {
                        let dateA = a.Date.split(".").reverse().join("-");
                        let dateB = b.Date.split(".").reverse().join("-");
                        return new Date(dateB) - new Date(dateA);
                      })
                      .map((log, index) => (
                        <Log
                          key={index}
                          Date={log.Date}
                          Activity={log.Activity}
                          Duration={log.Duration}
                          Description={log.Description}
                          Participants={log.Participants}
                        />
                      ))}
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
              <li>
                <strong>Total time of project</strong>: {totalDuration} hours
              </li>
            </ul>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default LogbookPage;
