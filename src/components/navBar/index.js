import React from "react";
import { Link } from "react-router-dom";

import "./navBar.css";

export default function NavBar({ classed }) {
  return (
    <section>
      <nav className={`topnav ${classed}`}>
        <ul>
          <Link to="/">
            <li className="li-item">Home</li>
          </Link>
          <Link to="/posts">
            <li className="li-item">PokeGram</li>
          </Link>

          <li className="li-item">Pikachu's divorce</li>

          <li className="li-item">Ash's crippling crack addiction</li>
        </ul>
        <img
          src="https://cdn.discordapp.com/attachments/786789210782171186/932410450006667314/690150.jpg"
          alt="search icon"
          className="nav-image"
        />
      </nav>
    </section>
  );
}
