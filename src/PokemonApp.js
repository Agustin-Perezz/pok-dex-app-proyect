import React, { useEffect, useState } from 'react'

import { PokemonContext } from './contexts/PokemonContext'
import { getPokemons } from './helpers/getPokemons';

import { AppRoutes } from './routes/AppRoutes'

export const PokemonApp = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        getPokemons()
            .then( dataPokemons => setData( dataPokemons ) )
    }, [])

    return (
        <div>
            <PokemonContext.Provider value={ data } >
                <AppRoutes />
            </PokemonContext.Provider>
        </div>
    )
}
