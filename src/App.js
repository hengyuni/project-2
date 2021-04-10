import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useState, useEffect} from "react";
import Pokemon from './Component/Pokemon.js';
import Pokedex from './Component/Pokedex.js';
import Footer from './Component/Footer.js';
// import mockData from './mockData'

export default function App () {
  const [pokemonData, setPokemonData] = useState([]);
  const getPokemonData = async () => {
    try {
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=151/`)
      const data = await res.json();
      setPokemonData(data.results);
      // console.log(data.results[2]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <div>
      <nav>
        <Link to="/" ><img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/bd571ae3cac22f6.png" alt="pokeball" width="100px" /></Link>
        <Link to="/" className="nav-text">POKEDEX</Link>
      </nav>
      <Switch>
        {/* <Route
          path={"/"}
          exact
          component={ Pokedex.js}
        /> */}
        <Route exact path="/" render={() => <Pokedex pokemonData={pokemonData} />} />
        <Route
        exact
        path="/:pokemonId"
        render={(routerProps) => {
          // return <Pokemon routerProps={routerProps} />
          const pokemon = [...pokemonData].filter(
            (p) => p.id === routerProps.match.params.id
          );
          // console.log(pokemon)
          return <Pokemon {...routerProps} pokemon={pokemon[0]} />;
        }}
      />
      </Switch>
      <Footer />
    </div>
  );
}

// CHANGE FONT!!

// EDIT FOOTER TEXT!!

// HOVER EFFECT TO SHINY POKEMON!!!

// add search engine?
