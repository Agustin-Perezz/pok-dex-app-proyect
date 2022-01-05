
const baseUrlApi = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonsData = async( id = '1' ) => {

    try {

        const url = `${ baseUrlApi }${ id }`; 
        const resp = await fetch( url );
        const data = await resp.json();

        // console.log( data );
        return data;
        
    } catch (error) {
        console.log( error );       
    }

}
