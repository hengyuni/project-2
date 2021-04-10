import React from 'react'
// import Sprite from './Component/Sprite'
import { useState, useEffect} from 'react'
import mockData from "../mockData.json"
import Stats from "./Stats.js"

const Pokemon = (props) => {
  const {match} = props;
  const {params} = match;
  const {pokemonId} = params;
  // console.log(params)
  // console.log(props)
  // console.log(mockData)

  const [pokemonData, setPokemonData] = useState(mockData)
  const [types, setTypes] = useState([])

  const getData = async () => {
    // let temp = null;
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      const data = await res.json();
      if(data.types.length === 1) {
        setTypes(<p>TYPE: {data.types[0].type.name.toUpperCase()}</p>);
      } else {
        setTypes(<p>TYPES: {data.types[0].type.name.toUpperCase()}/{data.types[1].type.name.toUpperCase()}</p>);
      }
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
      <h1>loading...</h1>
    )
  }

  // let getDeez = () => {
  //   if(pokemonData.types[1] !== "undefined") {
  //     return <p>{pokemonData.type[1].type.name}</p>
  //   }
  // }

  // let secondType = pokemonData.type[1].type.name;
  // let setSecondType = secondType !== "undefined" ? secondType : null;

  // console.log(pokemonData.types);
  return (
    <div className="App">
      <h1>#{pokemonData.id}. {pokemonId.toUpperCase()}</h1>
      <div className="pokemon-container">
        <div className="pokemon-image-container">
          <img src={pokemonData.sprites.front_default} alt="pokemon front" width="150px" className="pokemonPage-img"/>
        </div>
      <div className="basic-info">
        {/* <p>{pokemonData.id}</p> */}
        {types}
        <p>HEIGHT: {pokemonData.height / 10}m</p>
        <p>WEIGHT: {pokemonData.weight / 10}kg</p>
        <p>
          BASE EXP: {pokemonData.base_experience}
        </p>
      </div>
      <Stats pokemonData={pokemonData}/>
      </div>
      {/* <div className="stats-container">
        <h4>STATS:</h4>
          {pokemonData.stats &&
            pokemonData.stats.map((pokemon) => {
              return (
                <div className="stats">
                  <p key={pokemon.stat.name}>
                    {pokemon.stat.name.toUpperCase()}: {pokemon.base_stat}
                  </p>
                </div>
              );
            })}
        </div> */}
    </div>
  );
}

export default Pokemon;





