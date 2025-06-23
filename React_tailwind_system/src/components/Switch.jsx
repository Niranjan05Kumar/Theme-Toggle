import { RiComputerLine } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const Switch = () => {
  const getDefaultTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getDefaultTheme);
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.add(systemTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex bg-bg w-fit outline-2 outline-border-dark p-1 shadow-box-up rounded-xl">
      <div className="btn-box rounded-xl w-full px-2 py-1.5">
        <button
          onClick={() => setTheme("system")}
          className={`inline-flex text-text-muted items-center mr-2 rounded-lg last-of-type:mr-0 p-2.5 focus:opacity-100 hover:bg-bg-light duration-300 ${
            theme === "system" ? "bg-bg-light text-text" : "bg-transparent"
          }`}
        >
          <RiComputerLine size={22} />
        </button>
        <button
          onClick={() => setTheme("light")}
          className={`inline-flex text-text-muted items-center mr-2 rounded-lg last-of-type:mr-0 p-2.5 focus:opacity-100 hover:bg-bg-light duration-300 ${
            theme === "light" ? "bg-bg-light text-text" : "bg-transparent"
          }`}
        >
          <FiSun size={22} />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`inline-flex text-text-muted items-center mr-2 rounded-lg last-of-type:mr-0 p-2.5 focus:opacity-100 hover:bg-bg-light duration-300 ${
            theme === "dark" ? "bg-bg-light text-text" : "bg-transparent"
          }`}
        >
          <BsFillMoonStarsFill size={20} />
        </button>
      </div>
    </div>
  );
};

export default Switch;
