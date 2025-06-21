import "./switch.css"
import { useState, useEffect } from "react";

const Switch = () => {

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);



  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input checked={isDark} onChange={toggleTheme} id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" defaultValue="dark" />
        <span className="theme__fill" />
        <span className="theme__icon">
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
          <span className="theme__icon-part" />
        </span>
      </span>
    </label>
  );
}

export default Switch;