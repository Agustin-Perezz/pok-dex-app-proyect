import React, { useState } from 'react'

import { BiSearchAlt } from "react-icons/bi"; 
import { NotFoundScreen, PokemonCard } from '.';
import { getPokemonByName } from '../../helpers';
import { useForm } from '../../hooks/useForm';

export const PokemonSearchScreen = () => {

    const [ pokemonSelected, setPokemonSelected ] = useState([]);
    
    const [ formValues, handleInputChange ] = useForm({
		searchTxt: ''	
	}); 

    const { searchTxt } = formValues;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        getPokemonByName( searchTxt )
            .then( ( pokemon ) => setPokemonSelected( pokemon ))
    }

    return (
        <div>

            <div className='search'>
                <form onSubmit={ handleSubmit } >
                    <input 
                        className='search__input'
                        value={ searchTxt }
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
                        placeholder='search pokemon...'
                    > 
                    <BiSearchAlt className='search__icon'/> 
                    </button>
                </form>
            </div>
            {   
                ( pokemonSelected === undefined )
                &&
                (
                    <NotFoundScreen /> 
                )
            }

            {
                ( pokemonSelected !== undefined && pokemonSelected.length !== 0 )
                &&
                (
                    <div className='search__container'>
                        <PokemonCard { ...pokemonSelected } />
                    </div>
                )
            }

        </div>
    )
}
