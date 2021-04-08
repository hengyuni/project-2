import Sprite from "./Sprite"
import { Link } from 'react-router-dom'

export default function Pokedex({ pokemonData }) {
  if (pokemonData === 'undefined') {
    return <h1>loading...</h1>
  }
  // console.log(pokemonData)
  return (
    <div className="pokedex-container">
      <h1>POKÉDEX</h1>
      <div className="pokedex">
      {pokemonData.map((pokemon, i) => {
        return (
        <Link to={`/${pokemon.name}`} key={i}>
          <Sprite pokemon={pokemon} />
          <h3>{pokemon.name.toUpperCase()}</h3>
        </Link>
        )
      })}
      </div>
    </div>
  );
}
        



