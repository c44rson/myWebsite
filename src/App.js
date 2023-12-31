import "./App.css";
import lmu from "./images/lmu.png";
import me from "./images/c4rson.png";

function App() {
  return (
    <div className="global">
      <div className="header">
        <img className="lmu" src={lmu} alt="LMU" />
        <h1>Carson Cabrera</h1>
      </div>
      <div className="projects">
        <h2>My Projects</h2>
        <a href="https://github.com/c44rson" target="_blank" rel="noreferrer">
          Github Repo
        </a>
        <p>
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
          PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS PROJECT DEMOS
        </p>
      </div>
      <div className="aboutme">
        <img className="me" src={me} alt="Carson" />
        <p>
          Carson Cabrera is a 19-year-old B.S. Computer Science major, Business
          Administration minor student at Loyola Marymount University. He is
          from the San Fernando Valley in Los Angeles, CA. His specialties are
          Full-Stack Web Development and writing fun programs in Python. Besides
          his programming endeavors, he is on the LMU Rugby team, enjoys amateur
          Powerlifting, is a semi-pro Counter-Strike player, and a casual
          runner. In the near future, he wants to get hired by any tech company,
          in any field. Long term... world domination?
        </p>
      </div>
      <div className="connect">
        <h4>Links</h4>
        <p>LINKS LINKS LINKS LINKS LINKS</p>
        <p>LINKS LINKS LINKS LINKS LINKS</p>
        <p>LINKS LINKS LINKS LINKS LINKS</p>
        <p>LINKS LINKS LINKS LINKS LINKS</p>
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
