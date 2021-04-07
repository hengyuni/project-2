import React from 'react'
import Sprite from './Component/Sprite'
import { useState, useEffect} from 'react'
import mockData from "./mockData.json"
const Pokemon = (props) => {
  const {match} = props;
  const {params} = match;
  const {pokemonId} = params;
  console.log(params)
  // console.log(props)
  console.log(mockData)

  const [pokemonData, setPokemonData] = useState(mockData)

  const getData = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      const data = await res.json();
      setPokemonData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    getData();
  }, []);

  console.log(pokemonData)

  if(pokemonData === "undefined") {
    return (
      <h1>loading.......</h1>
    )
  }

  return (
    <div className="App">
      <h1>Pokemon {pokemonId}</h1>
      <img src={pokemonData.sprites.front_default} alt="pokemon front" width="150px"/>
       {/* <Sprite pokemon={pokemonId} /> */}
      {/* <h1>{pokemonId}</h1> */}
      <p>Height: {pokemonData.height}</p>
    </div>
  );
}

export default Pokemon;