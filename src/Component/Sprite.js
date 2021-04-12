import { useState, useEffect } from "react";

export default function Sprite ({ pokemon }) {
  const [pokemonSprite, setPokemonSprite] = useState("")
  const [pokemonId, setPokemonId] = useState("")

  const getSprite = async () => {
    try {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      setPokemonSprite(data.sprites.front_default)
      setPokemonId(data.id)
      // console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getSprite();
  }, []);


  return (
    <div>
      {/* <p>{pokemonId}</p> */}
      <img src={pokemonSprite} alt={pokemon.name} className="sprite" width="150px"/>
    </div>
  )
}