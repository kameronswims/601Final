import React, {useState} from 'react';

function PokedexSelector(props) {
    // const {pokemons} = props;
    const {choosePokedex, pokedexs, onSelection} = props;

    return (
        <div>
            <h1>Choose! Your! Pokedex!</h1>
            <ul>
                {
                    pokedexs.map((pokedex, i) => {
                return (
                    <li key={i}>
                        <span>{pokedex.name}</span>
                        <button onClick={() => onSelection(pokedex.name)}>Select</button>
                    </li>
                )        
                    })
                }
            </ul>
        </div>
    )}
export default PokedexSelector;
