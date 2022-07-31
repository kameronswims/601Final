import {Pokedex} from 'pokeapi-js-wrapper';
import React, {useState, useEffect} from 'react';
import PokemonList from "./PokemonList";
import PokemonInfo from "./PokemonInfo";
import PokedexSelector from "./PokedexSelector.jsx"

function App() {
  const [hasError, setErrors] = useState(null);
  const [pokedexs, setPokedexs] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState(null);
  const [pokedexSelected, setPokedexSelected] = useState(null);
  const P = new Pokedex.Pokedex()
  
  console.log("Pokedex 1: "+pokedexSelected);
  console.log("Pokemon 1: "+pokemonSelected);

  const choosePokedex = selection => setPokedexSelected(selection);
  const choosePokemon = selection => setPokemonSelected(selection);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await new P.resource("/api/v2/pokedex");
        const results = response.results;
        setPokedexs(results);
      } catch (e) {
        setErrors("An error has occured: "+e.message);
      }
    }
    fetchData();
  }, [])
  return (
    <div>
      <>
      {hasError? 'An error has occured': null}
      </>
      {!pokedexSelected ?
      <PokedexSelector pokedexs = {pokedexs} onSelection={choosePokedex} />
    : null}
    <hr />
    {pokedexSelected && PokemonList && pokemonSelected? <PokemonInfo pokemonSelected={pokemonSelected}/>: null}
    </div>
  );
}

export default App;
