import { useEffect, useState } from "react";

export default function Sprite ({pokemon}) {
    const [pokemonPic, setPkPic] = useState("")
    // const [pkPicShiny, setPkPicShiny] = useState("")
    const [pokemonId, setPkId] = useState("")

    const fetchPic = async() => {
        try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            setPkPic(data.sprites.front_default)
            // setPkPicShiny(data.sprites.front_shiny)
            setPkId(data.id)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=> {
      fetchPic();
    }, []);

    return (
        <div>
            {/* <p>{pokemonId}</p> */}
            <img width='150px' src={pokemonPic} alt={pokemon.name} />
        </div>
    )
};

