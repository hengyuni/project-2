import React from 'react'

const Pokemon = (props) => {
  const {match} = props;
  const {params} = match;
  const {pokemonId} = params;
  return (
    <div className="App">
      <h1>Pokemon page # {pokemonId}</h1>
      <h1>{pokemonId}</h1>
    </div>
  );
}

export default Pokemon;