import Sprite from "./Component/Sprite"
import { Link } from 'react-router-dom'

export default function Pokedex({ pokemonData }) {
  if (pokemonData === 'undefined') {
    return <h1>loading...</h1>
  }
  console.log(pokemonData)
  return (
    <div className="App">
      {/* <h1>{pokemonData[5].name}</h1> */}
      <h1>Pokedex page</h1>
      {pokemonData.map((pokemon, i) => {
        return (
        <Link to={`/${pokemon.name}`} key={i}>
          <Sprite pokemon={pokemon} />
          <h1>{pokemon.name}</h1>
        </Link>

        )
      })}
    </div>
  );
}


