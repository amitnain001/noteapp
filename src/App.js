// import logo from "./logo.svg";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("dark");
  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const modeBtn = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode("light");
      setbtnText("Enable Light Mode ");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      setTextMode("dark");
      setbtnText("Enable Dark Mode ");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Navbar
        title="ANLN"
        link1="Home"
        link2="About us"
        mode={mode}
        textmode={textMode}
        modeBtn={modeBtn}
        btnText={btnText}
      />
      <div className="py-5">
        <Textform
          heading="Welcome to the Note Application."
          mode={mode}
          textmode={textMode}
        />
      </div>
      <Aboutus mode={mode} textmode={textMode} />
    </div>
  );
}

export default App;
