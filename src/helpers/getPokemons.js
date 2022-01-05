import { getPokemonsData } from "./getPokemonsData"

const allPokemons = [];

export const getPokemons = async() => {

    
    for (let x = 1; x < 5; x++) {
        
        const data = await getPokemonsData(`${ x }`);
        const stats = data.stats;
        
        const filterData = {
            id: data.id,
            name: data.name,
            img_pokemon: data.sprites.front_default,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat
        };

        allPokemons.push( filterData );
        
    }
    
    console.log( allPokemons );
    // return resp;

}