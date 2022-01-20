import { getPokemonsData } from "./getPokemonsData";

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemonSelected = async( pokemon ) => {

    const data = await getPokemonsData( pokemon );

    // const resp = await fetch(`${ baseUrl }/gender/${ data.id }`);
    // const dataGender = await resp.json();

    

    const auxData = await fetch(`${ baseUrl }/pokemon-species/${ data.id }`);
    const dataEspecies = await auxData.json();
    console.log( dataEspecies )

    return {
        id: data.id,
        name: data.name,
        // gender: dataGender.name,
        weight: data.weight,
        egg_group: dataEspecies.egg_groups[0].name,
        generation: dataEspecies.generation.name,
        habitat: dataEspecies.habitagit config --global user.email "Tu correo"t.name,
        stats: { ...data.stats },
        img_pokemon: data.sprites.other.dream_world.front_default,
    }

}