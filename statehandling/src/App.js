import "./App.css";
import { useState } from "react";
import BtnModule from "./Button.module.css";
import question from "./Data/faqsquest"; // Ensure correct import
import Faqs from "./Data/faqs";
import 'react-notification/lib/notifications.css';
function App() {
  // Check if the question array exists and is not empty before setting initial state
  const [quesstatus, setqesstatus] = useState(question.length > 0 ? question[0].id : null);

  const [status, setstatus] = useState(false);
  const [pstatus, setpstatus] = useState(false);
  const [mstatus, setmstatus] = useState(false);
  const [modelstatus, setmodelstatus] = useState(false);

  return (
    <div className="App">

     <button></button>
      <Faqs/>
      {/* <div>
        <h1>Frequently Asked Questions (FAQs)</h1>

        <div className="faqouter">
          {question.map((questions, i) => {
            return (
              <div className="faqitem" key={questions.id}>
                <h2 onClick={() => setqesstatus(questions.id)}>{questions.title}</h2>
                <p className={quesstatus === questions.id ? "activeAnswer" : ""}>{questions.description}</p>
              </div>
            );
          })}
        </div>
      </div> */}

      










      {/* Enquire Now Button */}
      <button className="en" onClick={() => setmodelstatus(true)}>Enquire Now</button>

      {/* Modal Overlay */}
      <div className={`modelOverlay ${modelstatus ? "modelshow" : ""}`} onClick={() => setmodelstatus(false)}></div>

      {/* Modal Box */}
      <div className={`modeldiv ${modelstatus ? "showmodeldiv" : ""}`}>
        <h3>Enquire Now <span onClick={() => setmodelstatus(false)}>&times;</span></h3>
      </div>

      {/* Menu Toggle Button */}
      <button className="micon" onClick={() => setmstatus(!mstatus)}>
        {mstatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      {/* Menu List */}
      <div className={`menu ${mstatus ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Password Toggle */}
      <input type={pstatus ? "text" : "password"} />
      <button onClick={() => setpstatus(!pstatus)}>{pstatus ? "Hide" : "Show"}</button>
      <br />

      {/* Styled Buttons */}
      <button className={BtnModule.error}>Danger</button>
      <button className={BtnModule.warning}>Warning</button>

      {/* Toggle Paragraph */}
      <button onClick={() => setstatus(!status)}>{status ? "Hide" : "Show"}</button>

      {status && <p className="para">Welcome to state</p>}
    </div>
  );
}

export default App;
