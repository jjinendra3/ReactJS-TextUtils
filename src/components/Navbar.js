import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Nav(props) {
  const toggler_Navbar = (colorer) => {
    props.toggle(colorer); //this will invoke the togglee fucntion of app.js to set the setmode to opposite color
    //checker(); // checks the color and only work is to switch the color style of enable dark mode label or enable light mode  label to the opposite color
  };
  // const checker = () => {
  //   console.log(switch_label_color.color === "black");
  //   if (switch_label_color.color === "white") {
  //     setswitch_label_color.color("black");
  //   } else {
  //     setswitch_label_color.color("white");
  //   }
  // };
  // const [switch_label_color, setswitch_label_color] = useState({
  //   color: "black",
  // });
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"> */}
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li> */}
          </ul>
          <button
            type="button"
            className="btn mx-1 btn-primary"
            onClick={() => {
              toggler_Navbar("blue");
            }}
          >
            Blue
          </button>
          <button
            type="button"
            className="btn mx-1 btn-secondary"
            onClick={() => {
              toggler_Navbar("grey");
            }}
          >
            Grey
          </button>
          <button
            type="button"
            className="btn mx-1 btn-success"
            onClick={() => {
              toggler_Navbar("green");
            }}
          >
            Green
          </button>
          <button
            type="button"
            className="btn mx-1 btn-danger"
            onClick={() => {
              toggler_Navbar("red");
            }}
          >
            Red
          </button>
          {/* <button
            type="button"
            className="btn mx-1 btn-warning"
            onClick={() => {
              toggler_Navbar("yellow");
            }}
          >
            Yellow
          </button> */}
          <button
            type="button"
            className="btn mx-1 btn-info"
            onClick={() => {
              toggler_Navbar("cyan");
            }}
          >
            Cyan
          </button>
          <button
            type="button"
            className="btn mx-1 btn-dark"
            onClick={() => {
              toggler_Navbar("black");
            }}
          >
            Dark
          </button>
          <button
            type="button"
            className="btn mx-1 btn-light"
            onClick={() => {
              toggler_Navbar("light");
            }}
          >
            Light
          </button>
          

          {/* <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={switch_label_color}
          >
            {props.writing}
          </label> */}
          {/* </div>  */}
        </div>
      </div>
    </nav>
  );
}
Nav.prototype = {
  title: PropTypes.string,
};
Nav.defaultProps = {
  title: "Title text here",
};
