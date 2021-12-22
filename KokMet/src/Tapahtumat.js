import './Main.css';
import { Component } from "react";
import Logo from "./logo.png";

class Tapahtumat extends Component {
  render() {
    return <div className="Tapahtumat" >
      <div className="Header">
        <header className="Otsikko" >
          <img src={Logo}
            width="170"
            height="50"
            alt="Teollisuusliiton logo" />
          <h1 > Metalli 67 </h1>
        </header>
      </div>
    </div>;
  }
}


export default Tapahtumat;