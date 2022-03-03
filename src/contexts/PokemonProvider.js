import { PokemonContext } from ".";
import { getPokemonData } from "../helpers";

export const PokemonProvider = ({ children }) => {

  const allPokemons = [];
  const getPokemons = async( start, end ) => {

    for (let x = start; x < end; x++) {
        
      const data = await getPokemonData(`${ x }`);

      const filterDataPokemon = {
        id: data.id,
        name: data.name,
        img_pokemon: data.sprites.other.dream_world.front_default,
        hp: data.stats[0].base_stat,
        types: data.types,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
      };

      allPokemons.push( filterDataPokemon );
    }
    return allPokemons;
  }
  
  return (
    <PokemonContext.Provider value={{
      // info or methods 
      getPokemons,
    }}
    >
      { children }
    </PokemonContext.Provider>
  )
}
