import React, { useEffect, useState } from 'react'
import { MdKeyboardReturn } from "react-icons/md";
import { useParams, useNavigate } from 'react-router-dom'
import { getPokemonSelected } from '../../helpers';

import { GiLifeBar, GiShiningSword, GiShield, GiSpearHook, GiRunningNinja } from "react-icons/gi";
  
export const PokemonSelectedScreen = () => {

    const navigate = useNavigate();
    const { pokSelect } = useParams();

    const [ data, setData ] = useState([]);
    useEffect(() => {
        getPokemonSelected( pokSelect )
            .then( dataPokemons => setData( dataPokemons ) )
    }, [])

    const handleReturn = () => {
        navigate(-1);
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
        <div className='main animate__animated animate__zoomIn'>
            <div className='container__pok'>
            <div className='main__block-1'>
                    <img src={ img_pokemon } alt={ name } className='main__img animate__animated animate__fadeInDown'></img>
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
                <h3> STATS </h3>
                <div className='container__stat'>
                <div className='main__stat'>
                    <GiLifeBar style={{ backgroundColor: '#67c172' }}/>
                    <h5> HP: { hp } </h5>
                </div>
                <div className='main__stat'>
                    <GiShiningSword style={{ backgroundColor: '#d34b4b' }}/>
                    <h5> Attack: { attack } </h5>
                </div>
                <div className='main__stat'>
                    <GiShield style={{ backgroundColor: '#2c669d' }}/>
                    <h5> Defense: { defense } </h5>
                </div>
                <div className='main__stat'>
                    <GiSpearHook style={{ backgroundColor: '#b8b75a' }}/>
                    <h5> Special.A: { specialAttack } </h5>
                </div>
                <div className='main__stat'>
                    <GiRunningNinja style={{ backgroundColor: '#6bacc3' }}/>
                    <h5> Speed: { speed } </h5>
                </div>
                </div>
            </div>

            <button 
                className='main__button'  
                type='text'
                onClick={ handleReturn }
            >
            <MdKeyboardReturn /> RETURN </button>
            </div>
        </div>
    )
}
