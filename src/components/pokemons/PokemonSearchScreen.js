import React, { useEffect, useMemo, useState } from 'react'

import { BiSearchAlt } from "react-icons/bi"; 
import { getPokemonByName } from '../../helpers/getPokemonByName';
import { useForm } from '../../hooks/useForm';
import { NotFoundScreen } from '../NotFoundScreen';
import { PokemonCard } from './PokemonCard';

export const PokemonSearchScreen = () => {

    const [ test, setTest ] = useState([]);
    
    const [ formValues, handleInputChange ] = useForm({
		searchTxt: ''	
	}); 

    const { searchTxt } = formValues;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        getPokemonByName( searchTxt )
            .then( ( pok ) => setTest( pok ) )
    }

    
    return (
        <div>

            <div className='search__box'>
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
                    <BiSearchAlt className='icon'/> 
                    </button>
                </form>
            </div>
            {   
                ( test === undefined )
                &&
                (
                    <NotFoundScreen /> 
                )
            }

            {
                ( test !== undefined && test.length !== 0 )
                &&
                (
                    <div className='search__container'>
                        <PokemonCard { ...test } />
                    </div>
                )
            }

        </div>
    )
}
