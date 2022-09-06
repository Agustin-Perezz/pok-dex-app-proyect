import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonsSearched } from "../../helpers";
import queryString from 'query-string';
import { CustomError } from "./CustomError";
import { PokemonCard } from "./PokemonCard";

export const PokemonSearchScreen = () => {

    const [inputValue, setInputValue] = useState('');
    const [pokemons, setPokemons] = useState({ data : undefined, loading : false });

    const location = useLocation();
    const navigate = useNavigate();
    
    const handleSubmit = async( e ) => {
        e.preventDefault();
        const { q = ''} = queryString.parse( location.search.trim().toLocaleLowerCase() );
        if ( q.length !== 0 ) {
            setPokemons({ data: undefined, loading: true });
            const data = await getPokemonsSearched( q );
            setPokemons({ data, loading: false });
        }
        navigate('');
    }
    
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
        navigate(`?q=${ e.target.value }`)
    }

    return (
        <>
            <div className='search'>
                <form onSubmit={ handleSubmit } className="form">
                    <input 
                        className='search__input'
                        value={ inputValue }
                        name='searchTxt'
                        onChange={ handleInputChange }
                        type='text'
                        autoComplete='off'
                        placeholder='search pokemon...'
                    >
                    </input>
                    <button 
                        className='search__btn'
                        type='submit'
                    >
                       Search 
                    </button>
                </form>
            </div>

            <div className='search__container'>
                { 
                    pokemons.loading && <span className="search__loading"> Loading... </span>
                }
                { 
                    pokemons.data === undefined && inputValue !== 0
                    && 
                    <CustomError pokemonChange={ pokemons } /> 
                }
                {
                    pokemons.data !== undefined && pokemons.loading !== true  
                    &&
                    <div className="animate__animated animate__fadeIn ">
                        <PokemonCard { ...pokemons.data } /> 
                    </div>
                }
            </div>
        </>        
)}
