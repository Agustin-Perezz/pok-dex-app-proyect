import React from 'react'
import { PokemonList, PokemonSearchScreen } from '.'

export const HomeScreen = () => {
    
    return (
        <div className='pokemon__home'>

            <PokemonSearchScreen />
            <PokemonList />
            
        </div>
    )
}
