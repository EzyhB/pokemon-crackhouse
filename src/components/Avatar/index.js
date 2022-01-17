import { useEffect, useState } from "react";

import "./avatar.css";

function Avatar({ name, classed }) {
  const [avatar, setAvatar] = useState({ sprites: {} });

  useEffect(() => {
    async function fetchData(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      //   console.log(data);
      setAvatar(data);
    }
    fetchData(name.toLowerCase());
  }, [name]);
  return (
    <section>
      <figure className={classed}>
        <img
          src={avatar.sprites.front_default}
          alt="Jigglypuff pokemon"
          className="image-zoom"
        />
      </figure>
    </section>
  );
}

export default Avatar;
