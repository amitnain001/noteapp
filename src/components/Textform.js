import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    // console.log("Upercase was clicked .");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Uppercase", "success");
  };
  const handleloclick = () => {
    // console.log("Upercase was clicked .");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lowercase", "success");
  };
  const handleclear = () => {
    // console.log("Upercase was clicked .");
    let newText = " ";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };
  const copyToclipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is Copied to clipboard", "success");
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra space from the text", "success");
  };
  const handleOnchange = (event) => {
    // console.log("Onchange is working without any problem.");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container-fluid d-sm-none bg-${props.mode} text-${props.textmode}`}
      >
        <div className="my-3 container">
          <h1 className="text-center">{props.heading}</h1>
          <textarea
            className="form-control"
            id="userInput"
            value={text}
            onChange={handleOnchange}
            rows="8"
          ></textarea>
          <button
            type="button"
            className="btn btn-danger my-3 mx-2"
            onClick={handleupclick}
          >
            Convert text to uppercase
          </button>
          <button
            type="button"
            className="btn btn-danger my-3 mx-2"
            onClick={handleloclick}
          >
            Convert text to LowerCase
          </button>
          <button
            type="button"
            className="btn btn-danger my-3 mx-2"
            onClick={handleclear}
          >
            clear
          </button>
          <button
            type="button"
            className="btn btn-danger my-3 mx-2"
            onClick={copyToclipboard}
          >
            copy text
          </button>
          <button
            type="button"
            className="btn btn-danger my-3 mx-2"
            onClick={removeExtraSpace}
          >
            Remove Sapace
          </button>

          <div className="container">
            <h2>Your Text Summary Here</h2>
            <p>
              {text.split(" ").length} words and {text.length} characters
            </p>
            <p>
              You can read this text in {text.split(" ").length * 0.008} mins
            </p>
            <h2>Preview</h2>
            <p className="text-danger">{text.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </>
  );
}
