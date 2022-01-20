import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonSelected } from '../../helpers/getPokemonSelected';

export const PokemonSelectedScreen = () => {

    const { pokSelect } = useParams();

    const [ data, setData ] = useState([]);

    useEffect(() => {
        getPokemonSelected( pokSelect )
        .then( dataPokemons => setData( dataPokemons ) )
    }, [])
    
    console.log( data )
    
    return (
        <div>
            <h1> hii </h1> 
        </div>
    )
}
