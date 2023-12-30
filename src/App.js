import "./App.css";

function App() {
  return (
    <div className="global">
      <div className="header">
        <div className="title">
          <h1>Carson Cabrera</h1>
        </div>
        <div className="emailForm">
          <h3>Email Me:</h3>
          <form
            action="https://formsubmit.co/0d8407458399b4d6df4b7ce1585e6905"
            method="POST"
          >
            <section>
              <input type="text" name="Name" placeholder="Full Name" required />
              <input type="email" name="Email" placeholder="Email" required />
            </section>
            <section>
              <textarea
                name="Message"
                placeholder="Message"
                required
              ></textarea>
            </section>
            <button target="_blank" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="body">
        <div className="interactive">
          <h2>Interactive Thing Goes Here</h2>
          <p>TODO INTERACTIVE GAME</p>
        </div>
        <div className="projects">
          <h2>My Projects</h2>
          <a href="https://github.com/c44rson" target="_blank">
            Github Repo
          </a>
          <p>TODO ADD PROJECT PREVIEWS</p>
        </div>
        <div className="aboutme">
          <h2>About Me</h2>
          <p>
            I am a 19 year old B.S. Computer Science student at Loyola Marymount
            University. I specialize in Full Stack Web Development and writing
            programs in Python. Besides my programming endeavors I am on the
            Loyola Rugby team, enjoy amateur Powerlifting, and casually run. In
            the near future, I want to work a job at a tech company as a
            software engineer. Long term, I want to take over the world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
