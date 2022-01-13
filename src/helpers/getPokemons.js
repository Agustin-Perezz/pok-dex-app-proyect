import { getPokemonsData } from "./getPokemonsData"

const allPokemons = [];

export const getPokemons = async() => {
    
    for (let x = 1; x < 100; x++) {
        
        const data = await getPokemonsData(`${ x }`);

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