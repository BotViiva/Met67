import './Main.css';
import { Component } from "react";
import Tapahtumalista from "./Tapahtumalista.js";

class Tapahtumat extends Component {
  render() {
    return <div className="Tapahtumat">
      <header className="Eka">
        <img src="./logo.png" alt="Teollisuusliiton logo" />
        <h1>Hihöö numba uno</h1>
      </header>
      <div className="Tapahtumalista"><Tapahtumalista /></div>
    </div>;

  }
}


export default Tapahtumat;