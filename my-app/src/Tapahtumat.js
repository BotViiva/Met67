import './Main.css';
import { Component } from "react";
import Tapahtumalista from "./Tapahtumalista.js";

class Tapahtumat extends Component {
  render() {
    return <div className="Tapahtumat">
      <div className="Header">
        <header className="Otsikko">
          <img id="logo" src="./logo.png" alt="Teollisuusliiton logo" />
          <h1>Metalli 67</h1>
        </header>
      </div>
      <div key="Tapahtumalista" className="Tapahtumalista"><Tapahtumalista /></div>
    </div>;

  }
}


export default Tapahtumat;