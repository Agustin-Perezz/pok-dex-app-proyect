import { typeColor } from '../../assets/ColorPokemons'
import { GiKnifeThrust  } from 'react-icons/gi';
import { MdShield, MdSpeed } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export const PokemonCard = ({
  attack,
  defense,
  speed,
  hp,
  img_pokemon,
  name,
  types,
}) => {

    const colorPokemon = typeColor[ types[0].type.name ];
    const urlPokemon = `/pokemons/${ name }`;

    return (
      <NavLink to={ urlPokemon } >
          <div className='pokemon animate__animated animate__fadeIn' 
            style={{ background: `radial-gradient(circle at 50% -5%, ${ colorPokemon } 40%, #ffffff 36%)`}}
          >
            <h2> HP { hp } </h2>
            <img src={ img_pokemon } loading="lazy" alt={ name }></img>
            <h1> { name } </h1>
            <div className='pokemon__types'>
              <span style={{ background: `${ colorPokemon }`}}> { types[0].type.name } </span>
              {
                ( types[1] !== undefined ) && <span style={{ background: `${ colorPokemon }`}}> { types[1].type.name } </span>
              }
            </div>
            <div className='pokemon__stats'>
              <h3> <GiKnifeThrust className='custom_2'/> <br /> { attack } </h3>
              <h3> <MdShield className='custom_3'/> <br /> { defense } </h3>
              <h3> <MdSpeed className='custom_1'/> <br /> { speed } </h3>
            </div>
          </div>
    </NavLink>
    )
} 
