import { useContext, useEffect, useState } from 'react'
import { PokemonCard } from '.';
import { PokemonContext } from '../../contexts/';

import InfiniteScroll from 'react-infinite-scroll-component';

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);

    const { getPokemons } = useContext( PokemonContext )

    useEffect(() => {
        getPokemons( pokemons.length+1, pokemons.length+20 )
            .then( dataPokemons => setPokemons( dataPokemons ))
    }, [])

    const fetchMoreData = async () => {
        const moreDataPokemons = await getPokemons( pokemons.length+1, pokemons.length+20 );
        setPokemons([ ...pokemons, ...moreDataPokemons ]);
    }

    return (
        <InfiniteScroll
            className='container'
            dataLength={ pokemons.length }
            hasMore={ true }
            next={ fetchMoreData }
        >
            {
                pokemons.map(( pokemon, index ) => (
                    <PokemonCard
                        key = { index }
                        { ...pokemon }
                    /> 
                ))
            }
        </InfiniteScroll>
    )
}
