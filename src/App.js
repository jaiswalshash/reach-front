import { useState, React, useEffect } from "react";
import Input from "./components/Input";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="bg-gray-50 dark:bg-purple-900 min-h-screen flex items-center justify-center px-16">
      <Navbar/>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-300 p-2 rounded-full focus:outline-none"
        >
          {theme === "light" ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="relative w-full max-w-lg z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <Input/>
        </div>
      </div>
    </div>
  );
}

export default App;
