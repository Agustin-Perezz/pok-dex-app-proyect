import {
    Routes,
    Route,
  } from "react-router-dom";

import { HomeScreen, PokemonSelectedScreen } from "../components/pokemons";
  
  
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
  