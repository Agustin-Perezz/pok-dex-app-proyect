import React, { useEffect, useState } from 'react'

import { getPokemons } from '../helpers/getPokemons';

export const HomeScreen = () => {
    const [ pok, setPok ] = useState({});

    useEffect(() => {
        getPokemons()
            .then( pokemons => setPok( pokemons ) )
    }, [])
    
    // console.log( pok );

    return (
        <div>
            <h2> fsfdd</h2>
            {/* <h2> { pok.name } </h2> 
            <h2> { pok.id } </h2>  */}
            <hr></hr>

        </div>
    )
}
