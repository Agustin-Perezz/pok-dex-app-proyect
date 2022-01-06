import React, { useEffect, useState } from 'react'

import { PokemonList } from './PokemonList';

export const HomeScreen = () => {
    
    return (
        <div>
            <h2> HOME PAGE </h2>
            <hr></hr>

            <PokemonList />
            
        </div>

    )
}
