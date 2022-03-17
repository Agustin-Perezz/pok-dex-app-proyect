import { useEffect, useState } from 'react'
import { PokemonCard } from '.';

import InfiniteScroll from 'react-infinite-scroll-component';
import { getGroupPokemons } from '../../helpers';

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        getGroupPokemons( pokemons.length+1, pokemons.length+20 )
            .then( dataPokemons => setPokemons( dataPokemons ))

    }, [])

    const fetchMoreData = async () => {
        const moreDataPokemons = await getGroupPokemons( pokemons.length+1, pokemons.length+20 );
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
