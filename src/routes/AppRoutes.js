import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { HomeScreen } from "../components/pokemons/HomeScreen";
import { PokemonSearchScreen } from "../components/pokemons/PokemonSearchScreen";
import { NotFoundScreen } from "../components/NotFoundScreen";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    exact path="/pokemon" 
                    element={ <PokemonSearchScreen /> } 
                />

                <Route 
                    exact path="/" 
                    element={ <HomeScreen /> } 
                />

                <Route path="*" element={ <NotFoundScreen /> } />
                
            </Routes> 
        </BrowserRouter>
    )
}
