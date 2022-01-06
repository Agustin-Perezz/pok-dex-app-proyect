import React, { useEffect, useState } from 'react'

import { getPokemons } from '../../helpers/getPokemons';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        getPokemons()
            .then( pokemons => setPokemons( pokemons ) )
    }, [])

    return (
        <div className='container'>
            {
                pokemons.map( pokemon => (
                    <PokemonCard 
                        key = { pokemon.id }
                        { ...pokemon }
                    /> 
                ))
            }
        </div>
    )
}
