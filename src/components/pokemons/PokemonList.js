import React, { useContext } from 'react'

import { PokemonContext } from '../../contexts/PokemonContext';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const pokemons = useContext( PokemonContext );

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
