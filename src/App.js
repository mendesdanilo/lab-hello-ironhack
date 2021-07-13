import logo from "./logo.svg";
import "./App.css";
import Declarative from "./Declarative";
import Components from "./Components";
import Singleway from "./Single-Way";
import JSX from "./JSX";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <img src="./ironhack-logo.svg"></img>
          </div>
          <div>
            <img src="./menu-top.svg"></img>
          </div>
        </div>
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <h4>You will learn how to use</h4>
        <h4>the most popular frontend library</h4>
        <h4>and become a super Ninja developer.</h4>
        <button className="button">Awesome!</button>
      </div>

      <div className="section-2">
        <div className="declarative">
          <Declarative />
        </div>

        <div>
          <Components />
        </div>

        <div>
          <Singleway />
        </div>

        <div>
          <JSX />
        </div>
      </div>
    </>
  );
}

export default App;
