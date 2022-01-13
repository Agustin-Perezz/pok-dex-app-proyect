import React from 'react'

import { PokemonList } from './PokemonList';
import { PokemonSearchScreen } from './PokemonSearchScreen';

export const HomeScreen = () => {
    
    return (
        <div className='pokemon__home'>

            <PokemonSearchScreen />
            <PokemonList />
            
        </div>
    )
}
