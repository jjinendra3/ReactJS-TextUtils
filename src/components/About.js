import React from "react";
import img from "/Users/asus/Desktop/CWH/my-app/src/download.png"
export default function About(props) {
  //JS uses camelCase instead of dashes in css stlying
  // const [btntext, setbtntext] = useState("Enable Dark Mode!");
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // let togglestyler = () => {
  //   if (mystyle.color === "black") {
      
  //       setmystyle({ color: "white", backgroundColor: "black" });
  //       setbtntext("Enable Light Mode!");
      
  //   } else {
  //     setmystyle({ color: "black", backgroundColor: "white" });
  //     setbtntext("Enable Dark Mode!");
  //   }
  // };
  return (
    <>
    {/* // //style={mystyle} */}
      <div className="container" >
      <div className="row">
    <div className="col" style={{
      textAlign:"center"
    }}>
       <br />{/*<br /> <br /><br /><br /> */}
      <img src={img} alt="" style={{
      height:"350px",
      width:"350px",
      justifyContent:"center",
      borderRadius:"100%"

    }}/>
    </div>
    <div className="col">
    <br /><br /><br /><br />
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>About Us</h1>
        <p style={{color:props.mode==='dark'?'white':'black'}}>
        Welcome to TextUtils, your one-stop website for all your text manipulation needs. Whether you want to convert text to uppercase or lowercase, remove spaces, replace words, estimate reading time, or even customize the color theme, we've got you covered. With our user-friendly interface, you can effortlessly transform your text to suit your needs. Join the countless users who have benefited from our efficient and hassle-free text manipulation services. Explore TextUtils today and unlock the power of text manipulation at your fingertips.
        </p>
    </div>
  </div>
        
        {/* <button type="button" onClick={togglestyler} className="btn btn-dark" style={mystyle}>
          {btntext}
        </button> */}
      </div>
    </>
  );
}
