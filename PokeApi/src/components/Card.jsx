import '../styles/Card.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Card = () => {
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    const handleChange = (e) => {
        setSearchText(e.target.value);
        navigateSearcher();
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

    const navigateProCard = () => {
        navigate('/procard');
    };


    const navigateSearcher = () => {
        navigate(`/pokedex?${searchText}`)
    }


    return (
        <>
            <input placeholder='Search Pokemon' value={searchText} onInput={(e) => { handleChange(e) }} />

            {pokemonData.map((pokemon, index) => {

                if (pokemon.name.includes(searchText)) {
                    return (
                        <button onClick={navigateProCard}>
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