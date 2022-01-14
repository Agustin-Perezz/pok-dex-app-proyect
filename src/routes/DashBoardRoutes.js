import {
    Routes,
    Route,
  } from "react-router-dom";
  
import { HomeScreen } from "../components/pokemons/HomeScreen";
import { PokemonSelectedScreen } from "../components/pokemons/PokemonSelectedScreen";
  
  export const DashBoardRoutes = () => {
      return (
          <>
            <Routes>

                <Route path="pokemons" element={ <HomeScreen /> } />
                <Route path="pokemons/:pokSelect" element={ <PokemonSelectedScreen /> } />

                <Route path="/" element={ <HomeScreen /> } />

            </Routes> 
        </>
      )
  }
  