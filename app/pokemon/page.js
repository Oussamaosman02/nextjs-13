import { use } from "react";

async function getData() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  const data = await res.json();
  return data;
}

export default function page() {
  const datos = use(getData());
  const resul = datos.results;
  return (
    <div>
      <h2>Poke Api</h2>
      <h3>This page works with PokeApi</h3>
      <h5>{datos.count} </h5>
      <ul>
        {resul.map((reso) => {
          return <li key={reso.name}>Nombre:{reso.name}</li>;
        })}
      </ul>
    </div>
  );
}
