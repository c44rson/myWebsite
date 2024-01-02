import "./App.css";
import lmu from "./images/lmu.png";
import me from "./images/c4rson.png";
import leet from "./images/leetcode.png";
import git from "./images/github.png";
import { useState } from "react";
import Contact from "./Contact";

function App() {
  const [home, setHome] = useState(true);
  const [contact, setContact] = useState(false);
  return (
    <div className="god">
      <div className="header">
        <a
          href="https://cse.lmu.edu/department/computerscience/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="headerPhoto" src={lmu} alt="LMU" />
        </a>
        <h1
          onClick={() => {
            setHome(true);
            setContact(false);
          }}
        >
          Carson Cabrera
        </h1>
        <div className="contactClickable">
          <a
            href="https://leetcode.com/c4444rson/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={leet} alt="leetcode logo clickable" />
          </a>
          <a href="https://github.com/c44rson" target="_blank" rel="noreferrer">
            <img src={git} alt="github logo clickable" />
          </a>
          <button
            onClick={() => {
              setHome(false);
              setContact(true);
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
      {!home && contact ? (
        <Contact />
      ) : (
        <div className="content">
          <div className="projects">
            <h2>Project Preview</h2>
            <div className="videos">
              <iframe
                width="750"
                height="450"
                title="project1"
                src="https://www.youtube.com/embed/bfxA1dDNPgE"
              ></iframe>
              <h3>Title</h3>
              <p>Description</p>
              <iframe
                width="750"
                height="450"
                title="project2"
                src="https://www.youtube.com/embed/LJEOy9VQjkk"
              ></iframe>
              <h3>Title</h3>
              <p>Description</p>
            </div>
          </div>
          <div className="aboutme">
            <img className="me" src={me} alt="Carson" />
            <p>
              Carson Cabrera is a 19-year-old B.S. Computer Science major,
              Business Administration minor 2nd-year at Loyola Marymount
              University. Born and raised in the San Fernando Valley, his
              specialties are Full-Stack Web Development and writing fun
              programs in Python. Besides his programming endeavors, he starts
              on the LMU Rugby team, enjoys Powerlifting and runs long
              distances. In the near future, he wants to get hired by any tech
              company, in any field. Long term? World Domination.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
