import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { Routes ,Route } from 'react-router-dom';
// import {
//   BrowserRouter,
// } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const [written_mode, setwritten_mode] = useState("Enable Dark Mode");
  const [mode, setmode] = useState("light");
  const toggle = (color_want) => {
    if (mode === "light" && color_want !== "light") {
      setmode("dark");
      setwritten_mode("Enable Light Mode");
      if (color_want === "blue") {
        document.body.style.backgroundColor = "blue";
        // setmode("blue"); only to show that we can change navbar color also, doing the same color to bodya nd navbar looks ugly ngl
      } else if (color_want === "grey") {
        document.body.style.backgroundColor = "grey";
      } else if (color_want === "green") {
        document.body.style.backgroundColor = "green";
        // setmode("blue"); only to show that we can change navbar color also, doing the same color to bodya nd navbar looks ugly ngl
      } else if (color_want === "red") {
        document.body.style.backgroundColor = "red";
        // setmode("blue"); only to show that we can change navbar color also, doing the same color to bodya nd navbar looks ugly ngl
      } else if (color_want === "yellow") {
        document.body.style.backgroundColor = "yellow";
        // setmode("blue"); only to show that we can change navbar color also, doing the same color to bodya nd navbar looks ugly ngl
      } else if (color_want === "cyan") {
        document.body.style.backgroundColor = "cyan";
        // setmode("blue"); only to show that we can change navbar color also, doing the same color to bodya nd navbar looks ugly ngl
      } else if (color_want === "black") {
        document.body.style.backgroundColor = "black";
        // setmode("blue"); only to show that we can change navbar color also, doing the same color to bodya nd navbar looks ugly ngl
      } else {
        document.body.style.backgroundColor = "grey";
      }
      //showalert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      setwritten_mode("Enable Dark Mode");
     // showalert("Light Mode Enabled!", "success");
      document.body.style.backgroundColor = "white";

      // document.body.style.backgroundColor = "white";
    }
  };
  //router doesnt work with github pages, hence it has been removed
  return (
    // only one return tag can be useed inside this return
    <>
    {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggle={toggle}
        writing={written_mode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes>
            <Route exact path="/about" element={}> */}
            <About mode={mode} />
            {/* </Route>
            <Route exact path="/" element={}> */}
            <Textform
          heading="Type the text here"
          mode={mode}
          funalert={showalert}
        />
        </div>
            {/* </Route>
          </Routes>
        </BrowserRouter> */}
    </>
  );
}

export default App;
