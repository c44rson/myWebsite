import "./App.css";

function Contact() {
  return (
    <div className="contactPage">
      <h3>Email Me:</h3>
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
            maxLength={250}
          ></textarea>
        </div>
        <div className="formInput">
          <button target="_blank" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
