import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import CwDark from "./components/logo/CwDark";
import CwLight from "./components/logo/CwLight";
import Moon from "./icons/MoonIcon";
import Sun from "./icons/SunIcon";

function App() {
  const [themeDark, setThemeDark] = useState(true);

  const themeControl = () => {
    if (themeDark === true) {
      document.body.style.backgroundColor = "#F5F5F5";
      document.body.style.color = "#3D4351";
      document.body.style.transition = "all 0.3s ease-in";
      setThemeDark(false);
    } else if (themeDark === false) {
      document.body.style.backgroundColor = "#1A1C25";
      document.body.style.color = "#fff";
      document.body.style.transition = "all 0.3s ease-out";
      setThemeDark(true);
    }
  };

  return (
    <div>
      <Navbar
        cwLogo={themeDark ? <CwDark /> : <CwLight />}
        switchBtn={
          <button className="themeBtn" onClick={themeControl}>
            {themeDark ? <Sun /> : <Moon />}
          </button>
        }
      />
    </div>
  );
}

export default App;
