import React, {useEffect, useState} from 'react';
import {Pokedex} from 'pokeapi-js-wrapper';

function PokemonList(props) {
    const{pokemonSelected, choosePokemon, pokedexSelected, onSelection} = props;
    const[pokemonList, setPokemonList] = useState([]);
    const[hasError, setErrors] = useState(false);

    useEffect( function() {
        async function fetchPokemonListData() {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokedex/"+pokedexSelected);
                const results = await response.json();
                setPokemonList(results.pokemon_entries);
            } catch (e) {
                setErrors("An error has occured: "+e.message)
            }
        }
    fetchPokemonListData();}, []);
    return(
        <div>
            <h1>Pokemon List: </h1>
            <ul>
                {pokemonList.map((pokemon, i) => {
                    return (
                        <li key={i}>
                            <span>{pokemon.pokemon_species.name}</span>
                            <button onClick={() => onSelection(pokemon.pokemon_species.name)}>View Details</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )}
export default PokemonList;
