import { useState } from "react";

export const PokemonSearchScreen = ({ setPokemonsSearched }) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = ( e ) => {
        e.preventDefault();
        setPokemonsSearched( inputValue );
        setInputValue('');
    }

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
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
                        placeholder='buscar pokemon...'
                    >
                    </input>
                    <button 
                        className='search__btn'
                        type='submit'
                    >
                       Buscar 
                    </button>
                </form>
            </div>
            
        </>        
)}
