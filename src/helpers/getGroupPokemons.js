
import { filterPokemonsFeatures } from "../filter/filterPokemonsFeatures";
import { getPokemonData } from "./getPokemonData";

export const getGroupPokemons = async( start, end ) => {
  
  let allPokemons = [];

  for (let x = start; x <= end; x++) {
      
    const data = await getPokemonData(`${ x }`);

    const dataFilter = filterPokemonsFeatures( data );

    allPokemons.push( dataFilter );
  }

  return allPokemons;
}