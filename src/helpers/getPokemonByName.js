import { getPokemonData } from ".";

export const getPokemonByName = async( namePok = 'bulbasaur' ) => {

    try {

        const data = await getPokemonData( namePok );
        
        if ( data !== undefined ) {
            return {
                id: data.id,
                name: data.name,
                img_pokemon: data.sprites.other.dream_world.front_default,
                hp: data.stats[0].base_stat,
                types: data.types,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
            };
        }

    } catch (error) {
        console.log( error );
        return undefined;
    }

    

}
