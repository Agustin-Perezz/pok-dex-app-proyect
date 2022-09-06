import { useEffect, useState } from "react"
import { BiErrorCircle } from "react-icons/bi";
import 'animate.css';

export const CustomError = ({ pokemonChange }) => {

  const [fadeProp, setFadeProp] = useState('animate__animated animate__fadeIn');

  useEffect(() => {

    const timeout = setInterval(() => {
        setFadeProp('animate__animated animate__fadeOut')
    }, 1800);

    return () => {
      setFadeProp('animate__animated animate__fadeIn')
      clearInterval( timeout )
    };
  }, [ pokemonChange ])
  
  return (
    <>
        {
          <div className={`custom__error ${ fadeProp }`}>
            <BiErrorCircle />
            <h5 > Pokemon is not found! </h5> 
          </div>
        }
    </>
  )
}
