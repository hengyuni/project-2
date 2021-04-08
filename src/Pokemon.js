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
  const [deez, setDeez] = useState([])

  const getData = async () => {
    let temp = null;
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      const data = await res.json();
      if(data.types.length === 1) {
        setDeez(<p>Type: {data.types[0].type.name.toUpperCase()}</p>);
      } else {
        setDeez(<p>Types: {data.types[0].type.name.toUpperCase()}/{data.types[1].type.name.toUpperCase()}</p>);
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
      <h1>loading.......</h1>
    )
  }



  // let getDeez = () => {
  //   if(pokemonData.types[1] !== "undefined") {
  //     return <p>{pokemonData.type[1].type.name}</p>
  //   }
  // }

  // let secondType = pokemonData.type[1].type.name;
  // let setSecondType = secondType !== "undefined" ? secondType : null;

  console.log(pokemonData.types);
  return (
    <div className="App">
      <h1>{pokemonId}</h1>
      <img src={pokemonData.sprites.front_default} alt="pokemon front" width="150px"/>
       {/* <Sprite pokemon={pokemonId} /> */}
      {/* <h1>{pokemonId}</h1> */}
      {/* {pokemonData.types.map((type, i) => {
        // figure out to show types on one line!!!
        return (
          <p className={type.type.name} key={i}>
            Type: {type.type.name}
          </p>
        )
      })} */}
      {deez}
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
    </div>
  );
}

export default Pokemon;