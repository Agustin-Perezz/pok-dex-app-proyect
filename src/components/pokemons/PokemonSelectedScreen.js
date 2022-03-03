import React, { useEffect, useState } from 'react'

import { MdKeyboardReturn } from "react-icons/md";
import { useParams } from 'react-router-dom'
import { getPokemonSelected } from '../../helpers';
import { useNavigate } from "react-router-dom";

export const PokemonSelectedScreen = () => {

    const navigate = useNavigate();

    const { pokSelect } = useParams();

    const [ data, setData ] = useState([]);
    useEffect(() => {
        getPokemonSelected( pokSelect )
            .then( dataPokemons => setData( dataPokemons ) )
    }, [])

    const handleReturn = () => {
        navigate('/');
    }
    
    const { 
        habitat, 
        img_pokemon, 
        name, 
        id, 
        egg_group, 
        generation, 
        weight, 
        color, 
        hp,
        attack,
        defense,
        specialAttack,
        speed
    } = data;

    
    return (
        <div className='main'>
            <div className='main__block-1'>
                    <img src={ img_pokemon } alt={ name } className='main__img'></img>
                    <div className='main__text'>
                        <h1 className='main__name'> { name } </h1>
                        <h1> #: { id } </h1>
                    </div>
            </div>
            <div className='main__block-2'>
                <h3 className='main__habitat'> The habitat of this pokemon is </h3>
                <h4> { habitat } </h4>
                <div className='main__props'>
                    <h3 style={{ backgroundColor: `${ color }`}}> { egg_group } </h3>
                    <h3 style={{ backgroundColor: `${ color }`}} > { generation } </h3>
                    <h3 style={{ backgroundColor: `${ color }`}}> W: { weight }kg </h3>
                </div>
            </div>
            <div className='main__stats'>
                <h1> STATS POKEMON </h1>
                <ul className="chart">
                        <li>
                            <span style={{ height: `${ hp }%`, backgroundColor: '#52BE80'}} title="HP"> <h5> { hp } </h5> </span>
                        </li>
                        <li>
                            <span style={{ height: `${ attack }%`, backgroundColor: '#D33030' }} title="ATTACK"> <h5> { attack } </h5> </span>
                        </li>
                        <li>
                            <span style={{ height: `${ defense }%`, backgroundColor: '#5D6D7E' }} title="DEFENSE"> <h5> { defense } </h5> </span>
                        </li>
                        <li>
                            <span style={{ height: `${ speed }%`, backgroundColor: '#3498DB' }} title="SPEED"> <h5> { speed } </h5> </span>
                        </li>
                        <li>
                            <span style={{ height: `${ specialAttack }%`, backgroundColor: '#E74C3C' }} title="SPECIAL ATTACK"> <h5> { specialAttack } </h5> </span>
                        </li>
                      
                    </ul>    
            </div>

            <button 
                className='main__button'  
                type='text'
                onClick={ handleReturn }
            >
            <MdKeyboardReturn /> RETURN </button>
        </div>
    )

}