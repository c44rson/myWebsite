import "./App.css";
import lion from "./images/loyola.png";
import me from "./images/me.jpeg";

function App() {
  return (
    <div className="global">
      <div className="header">
        <img className="lion" src={lion} alt="Raging Lion" />
        <h1>Carson Cabrera</h1>
      </div>
      <div className="projects">
        <h2>My Projects</h2>
        <a href="https://github.com/c44rson" target="_blank" rel="noreferrer">
          Github Repo
        </a>
        <p>TODO ADD PROJECT PREVIEWS</p>
      </div>
      <div className="aboutme">
        <img className="me" src={me} alt="Carson" />
        <p>
          I am a 19 year old B.S. Computer Science student at Loyola Marymount
          University. I specialize in Full Stack Web Development and writing
          programs in Python. Besides my programming endeavors I am on the
          Loyola Rugby team, enjoy amateur Powerlifting, and casually run. In
          the near future, I want to work a job at a tech company as a software
          engineer. Long term, I want to take over the world.
        </p>
      </div>
      <div className="emailForm">
        <h4>Email Me:</h4>
        <form
          action="https://formsubmit.co/0d8407458399b4d6df4b7ce1585e6905"
          method="POST"
        >
          <div className="formInput">
            <input type="text" name="Name" placeholder="Name" required />
          </div>
          <div className="formInput">
            <input type="email" name="Email" placeholder="Email" required />
          </div>
          <div className="formInput">
            <textarea
              name="Message"
              placeholder="What's Up?"
              required
            ></textarea>
          </div>
          <div className="formInput">
            <button target="_blank" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
