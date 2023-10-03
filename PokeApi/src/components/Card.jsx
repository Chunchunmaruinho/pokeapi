import '../styles/Card.css'
import React, { useState, useEffect } from 'react';


const Card = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150   ';
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setPokemonData(data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>

            <input placeholder='Search Pokemon' value={searchText} onChange={(e) => { handleChange(e) }} />

            {pokemonData.map((pokemon, index) => {

                if (pokemon.name.includes(searchText)) {
                    return (
                        <button onClick={() => navigate()}>
                            <div key={index} className="card">
                                <h2>{pokemon.name}</h2>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                                    alt={pokemon.name}
                                />
                            </div>
                        </button>

                    )

                }

            })}


        </>
    );

}

export { Card }