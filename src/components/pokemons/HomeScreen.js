import React from 'react'

import { PokemonList } from './PokemonList';

export const HomeScreen = () => {
    
    return (
        <div className='pokemon__home'>
            <h2> HOME PAGE </h2>

            <PokemonList />
        </div>
    )
}
