import Sprite from "./Sprite"
import { Link } from 'react-router-dom'

export default function Pokedex({ pokemonData }) {
  if (pokemonData === 'undefined') {
    return <h1>loading...</h1>
  }
  // console.log(pokemonData)
  return (
    <div className="pokedex-container">
      {/* <h1>POKÉDEX</h1> */}
      <div className="pokedex">
      {pokemonData.map((pokemon, i) => {
        // console.log(pokemon)
        console.log(pokemon)
        console.log(pokemonData)
        return (
        <Link to={`/${pokemon.name}`} key={i}>
          <Sprite pokemon={pokemon} />
          {/* <h4>{i +1}</h4> */}
          <h4 className="main-text">{pokemon.name.toUpperCase()}</h4>
        </Link>
        )
      })}
      </div>
    </div>
  );
}
