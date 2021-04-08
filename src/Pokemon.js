import React from 'react'
// import Sprite from './Component/Sprite'
import { useState, useEffect} from 'react'
import mockData from "./mockData.json"

const Pokemon = (props) => {
  const {match} = props;
  const {params} = match;
  const {pokemonId} = params;
  // console.log(params)
  // console.log(props)
  // console.log(mockData)

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

  // console.log(pokemonData)

  if(pokemonData === "undefined") {
    return (
      <h1>loading.......</h1>
    )
  }

  // const typeTwo = () => {
  //   if(pokemonData.types[1] !== "undefined") {
  //     return <p>{pokemonData.type[1].type.name}</p>
  //   }
  // }

  // let secondType = pokemonData.type[1].type.name;
  // let setSecondType = secondType !== "undefined" ? secondType : null;

  return (
    <div className="App">
      <h1>{pokemonId}</h1>
      <img src={pokemonData.sprites.front_default} alt="pokemon front" width="150px"/>
       {/* <Sprite pokemon={pokemonId} /> */}
      {/* <h1>{pokemonId}</h1> */}
      {pokemonData.types.map((type, i) => {
        return (
          <p className={type.type.name} key={i}>
            Type: {type.type.name}
          </p>
        )
      })}
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
    </div>
  );
}

export default Pokemon;