import { useContext, useEffect, useState } from 'react'

import { PokemonCard } from '.';
import { PokemonContext } from '../../contexts/';

export const PokemonList = () => {

    const { getPokemons } = useContext( PokemonContext )

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons( 1, 20 )
            .then( dataPokemons => setPokemons( dataPokemons ))
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
