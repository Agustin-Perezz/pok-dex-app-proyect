import React from 'react'

export const PokemonCard = ({
  attack,
  defense,
  hp,
  img_pokemon,
  name
}) => {


    return (
        <div className='pokemon__main'>
          <div className='pokemon__card'>
            <img src={ img_pokemon } ></img>
            <h1> { name } </h1>
            <hr />
            <h3> HP { hp } </h3>
            <h3> ATTACK { attack } </h3>
            <h3> DEFENSE { defense } </h3>
          </div>
        </div>
    )
}
