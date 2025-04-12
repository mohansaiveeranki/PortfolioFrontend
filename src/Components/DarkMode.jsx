import React,{useState,useEffect} from "react";
import { BsFillMoonStarsFill, BsFillSunFill  } from "react-icons/bs";
import "./darkmode.css";


const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", !isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
      {isDark ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
    </button>
  );
};

export default DarkMode;
