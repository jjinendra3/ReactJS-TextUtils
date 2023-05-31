import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Textform(props) {
  const replacer=()=>{
    let a=prompt("Which word to replace?");
    if(!text.includes(a)){
      props.funalert("The text doesnt belong in the provided text area.","danger");
    }
    else{
      let b=prompt("With which word to replace?");
      //let c=confirm("Press OK to replace all and Cancel to replacce once!");
      let newstr=text;
      //if(c){
      while(newstr.includes(a)){
        newstr=newstr.replace(a,b);
      }
    //}
      // else{
      //   newstr=newstr.replace(a,b);
      // }
      setText(newstr);
    }
  }
  const [word_countt, setword_countt] = useState(0);
  const [sentence_count, setsentence_count ] = useState(0);
  const sentence_counter=()=>{
    let b=text.split(".");
    
    let c=0;
    for(let i=0;i<b.length;i++){
      if(b[i]!=="."){
        c++;
      }
    }
    setsentence_count(c);
    }
  const word_counter=()=>{
  let b=text.split(" ");
  
  let c=0;
  for(let i=0;i<b.length;i++){
    if(b[i]!==""){
      c++;
    }
  }
  setword_countt(c);
  }
  const copy_text = () => {
    var texta = text;
    texta.select();
    navigator.clipboard.writeText(texta);
    props.funalert("Text copied to clipboard","success");
  };
  const Clicked_add_space_Btn = () => {
    let newstring = text;
    let flag = 1;
    while (flag === 1) {
      flag = 0;
      for (let i = 0; i < text.length - 1; i++) {
        if (newstring[i] === " " && newstring[i + 1] === " ") {
          newstring = newstring.replace(newstring[i], "");
          flag = 1;
        }
      }
    }
    let h = text.length - 1;
    while (newstring[h] === " ") {
      newstring = newstring.substring(0, h - 1);
    }
    props.funalert("All Adiitional Spaces removed","success");
    let str=newstring.slice(1, newstring.length-1);
    setText(newstring.charAt(0).toUpperCase()+str);
    
  };
  const total_char_wo_space = () => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        count++;
      }
    }
    
    return count;
  };
  const check_twitter = () => {
    if (text.length <= 280) {
      return "Good to Go!";
    } else {
      return "Please reduce " + (text.length - 280) + " characters.";
    }
  };
  const handleonchange = (event) => {
    //("Handle On change");
    //console.log();
    word_counter();
    sentence_counter();
    if(document.getElementById("box").value.length===0){
      setword_countt(0);
      setsentence_count(0);
    }
    
    setText(event.target.value);
    //word_counter();
  };
  const Clicked_Up_Btn = () => {
    //("Upper case btn was clicked!");
    setText(text.toUpperCase());
    props.funalert("Converted to Uppercase","success");
  };
  const Clicked_low_Btn = () => {
    //("Upper case btn was clicked!");
    setText(text.toLowerCase());
    props.funalert("Converted to Lowercase","success");
  };
  const Clicked_clear_Btn = () => {
    setText("");
    setword_countt(0);
    setsentence_count(0);
    props.funalert("Text Cleared","success");
  };
  //According to the teacher there should be constant so just change it and then change Clicked_add_sapce btn to accomodate the change
  let [text, setText] = useState("");
  //placeholder attribute in text area html element looks more professional no cap
  //the fucntions to be used should be written before return
  return (
    <>
      <div className="mb-3 my-5">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          placeholder="Enter Text"
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          onChange={handleonchange}
          id="box"
          rows="8"
        ></textarea>
        <br />
        <button className="btn btn-primary mx-1" onClick={Clicked_Up_Btn}>
          Convert to UPPERCASE
        </button>

        <button className="btn btn-primary mx-1" onClick={Clicked_low_Btn}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={Clicked_clear_Btn}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={Clicked_add_space_Btn}
        >
          Remove Additional Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={copy_text}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={replacer}>
          Replace Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary is</h2>
        <p>
          <b>
            {word_countt} words and {text.length} characters.
          </b>
        </p>
        <p>No. of sentences: {sentence_count}</p>
        <p>No. of characters without spaces: {total_char_wo_space()}</p>
        <p>
          This article will take approximately{" "}
          {parseInt(text.split(" ").length * 0.08)} minutes to read.
        </p>
        <p><i className="fa-brands fa-twitter"></i> : {check_twitter()}</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something to preview here"}</p>
      </div>
    </>
  );
}
Textform.prototype = {
  heading: PropTypes.string.isRequired,
};
Textform.default = {
  heading: "Input here",
};
