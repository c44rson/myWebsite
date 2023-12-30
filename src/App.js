import "./App.css";

function App() {
  return (
    <div className="global">
      <div className="header">
        <h1>Carson Cabrera's Portfolio Website</h1>
        <h2>I currently work for [insert your company name here]</h2>
      </div>
      <div className="body">
        <div className="interactive">
          <form
            action="mailto:ccabre11@lion.lmu.edu"
            method="post"
            encType="text/plain"
          >
            Student Name:
            <input type="text" name="name" />
            Student Subject:
            <input type="text" name="subject" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="projects">
          <p>
            Projects Projects Projects Projects Projects Projects Projects{" "}
            Projects Projects Projects Projects Projects Projects Projects{" "}
            Projects Projects Projects Projects Projects Projects Projects{" "}
            Projects Projects Projects Projects Projects Projects Projects{" "}
            Projects Projects Projects Projects Projects Projects Projects{" "}
            Projects Projects Projects Projects Projects Projects Projects{" "}
          </p>
        </div>
        <div className="aboutme">
          <p>
            About Me Bozo Foobar About Me Bozo Foobar About Me Bozo Foobar About
            Me Bozo Foobar About Me Bozo Foobar About Me Bozo Foobar About Me
            Bozo Foobar About Me Bozo Foobar About Me Bozo Foobar About Me Bozo
            Foobar About Me Bozo Foobar About Me Bozo Foobar About Me Bozo
            Foobar About Me Bozo Foobar About Me Bozo Foobar About Me Bozo
            Foobar About Me Bozo Foobar About Me Bozo Foobar{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
