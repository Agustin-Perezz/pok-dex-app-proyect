import { useState, useEffect } from 'react';
import { PokemonList, PokemonSearchScreen } from '.';
import { getPokemonsSearched } from '../../helpers';
import { PokemonCard } from './PokemonCard';
import { BiErrorCircle } from "react-icons/bi";

import 'animate.css';

export const HomeScreen = ({ defaultCategories = '' }) => {
    
    const [pokemonsSearched, setPokemonsSearched] = useState( defaultCategories );
    const [pokemons, setPokemons] = useState([]);

    useEffect( async() => {
        const data = await getPokemonsSearched( pokemonsSearched );
        setPokemons([ data ]);
    }, [ pokemonsSearched ])

    return (
        <div className='pokemon__home'>

            <PokemonSearchScreen setPokemonsSearched={ setPokemonsSearched } />

            <div className='search__container'>
                { 
                    pokemons[0] === undefined && pokemons.length !== 0 
                    &&
                    <div className="custom__error animate__animated animate__fadeIn">
                        <BiErrorCircle />
                        <h5> Pokemon no encontrado! </h5> 
                    </div>

                }
                {
                    pokemons[0] !== undefined 
                    &&
                    <div className="animate__animated animate__fadeIn ">
                        <PokemonCard { ...pokemons[0] } /> 
                    </div>
                }
            </div>

            <PokemonList />
            
        </div>
    )
}
