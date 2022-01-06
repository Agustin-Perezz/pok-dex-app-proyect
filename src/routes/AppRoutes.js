import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { HomeScreen } from "../components/pokemons/HomeScreen";
import { PokemonScreen } from "../components/pokemons/PokemonScreen";
import { NotFoundScreen } from "../components/NotFoundScreen";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    exact path="/" 
                    element={ <HomeScreen /> } 
                />
                <Route 
                    exact path="/pokemon" 
                    element={ <PokemonScreen /> } 
                />

                <Route path="*" element={ <NotFoundScreen /> } />
                
            </Routes> 
        </BrowserRouter>
    )
}
