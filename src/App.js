// import logo from "./logo.svg";
import "./App.css";
import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

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
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      setTextMode("dark");
      setbtnText("Enable Dark Mode ");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msge: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar
        title="ANLN"
        link1="Home"
        mode={mode}
        textmode={textMode}
        modeBtn={modeBtn}
        btnText={btnText}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <Textform
        heading="Welcome to the Note Application."
        mode={mode}
        textmode={textMode}
        showAlert={showAlert}
      />
      <Aboutus mode={mode} textmode={textMode} />
    </>
  );
}

export default App;
