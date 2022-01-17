import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navBar/index.js";
import { data } from "./data.js";
import "./LandingPage.css";

export function LandingPage() {
  const [count, setCount] = useState(0);
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${data[count].count}.png`;
  const name = `${data[count].name}`;
  const hStyle = { color: `#${data[count].color}` };

  const pageTitle =
    "MyPokemon... It's where you discover the darker side of your favourite pokemons 😈";

  useEffect(() => {
    const inter = setInterval(() => {
      if (count === 8) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);
    return () => {
      clearInterval(inter);
    };
  }, [count]);

  return (
    <div>
      <NavBar classed="topnav-overlay" />
      <div id="main">
        <div id="right">
          <h1>
            <span id="My">My</span>
            <span id="Pokemon">Pokemon</span>
          </h1>
          <p id="para">{pageTitle}</p>
          <Link to="/posts">
            <button id="button" style={{ cursor: "pointer" }}>
              Explore Site
            </button>
          </Link>
        </div>
        <div id="left">
          <img id="pokeImg" src={url} alt="rnd pokemon" />
          <h2 id="name" style={hStyle}>
            {name}
          </h2>
        </div>
      </div>
    </div>
  );
}
/**while (true){
        if(count === 8){
            setTimeout(()=>count=0,5000)
        }else{
            setTimeout(()=>count+=1,5000)
        }
    }*/
