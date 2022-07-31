import { useEffect, useState } from 'react';

function PokemonInfo(props) {
    const {pokemonSelected} = props;
    const [pokemonDetails, setPokemonDetails] = useState();
    const [hasError, setErrors] = useState(null);

    useEffect( function() {
        async function fetchPokemonDetailData() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);
                const results = await response.json();
                setPokemonDetails(results);
            }
            catch(e) {
                setErrors("An Error Has Occured: "+e.message);
            }
        }
        fetchPokemonDetailData();}, []);
        console.log("Pokemon Detail: " +pokemonDetails);
        // const abilities = pokemonDetails.abilities;
    return (
        <div>
            <h1>Pokemon Details</h1>
            {pokemonDetails ?
            <div>
                <h1>Name: </h1>
                <h1>{pokemonSelected}</h1>
                </div>
                : null}
        </div>
    )    
    }
export default PokemonInfo;
