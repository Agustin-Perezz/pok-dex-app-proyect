import { getPokemonData } from "./getPokemonData";

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemonSelected = async( pokemon ) => {

    const data = await getPokemonData( pokemon );

    const auxData = await fetch(`${ baseUrl }/pokemon-species/${ data.id }`);
    const dataEspecies = await auxData.json();

    const habitat = dataEspecies.habitat.name.toUpperCase();
    const weight = data.weight / 10;

    data.id < 10 && data.id <=100 ? data.id = '00' + data.id : data.id = '0' + data.id;

    let color = dataEspecies.color.name;
    ( color === 'yellow' ) ? color = '#D4AC0D' : color = dataEspecies.color.name;
    if ( color === 'white' ) color = '#6d695b';
    
    return {
        img_pokemon: data.sprites.other['official-artwork'].front_default,
        id: data.id,
        name: data.name,
        weight,
        color, 
        egg_group: dataEspecies.egg_groups[0].name,
        generation: dataEspecies.generation.name,
        habitat,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
    }

}