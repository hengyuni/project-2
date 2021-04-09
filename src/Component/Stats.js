

export default function Stats({pokemonData}) {
  return (
    <div className="stats-container">
        {/* <h4>STATS:</h4> */}
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
        </div>
  )  
}