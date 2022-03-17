import { getPokemonData } from ".";
import { filterPokemonsFeatures } from "../filter/filterPokemonsFeatures";

export const getPokemonsSearched = async( pokemon ) => {

        const data = await getPokemonData( pokemon );

        if ( data === undefined || pokemon === undefined ) return undefined;

        return filterPokemonsFeatures( data );

}
