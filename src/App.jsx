import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { supabase } from "../supabase-client";

function App() {
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState([]); // Supabase example

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rooms App</h1>

      {/* Supabase example: */}
      <h2>Fetching countries from Supabase</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      <img
        src="https://media1.tenor.com/m/DNCBqbguizsAAAAd/magic.gif"
        alt="GLAZEDDD!"
        style={{ height: "200px" }}
      />
    </>
  );
}

export default App;
