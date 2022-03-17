import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { HomeScreen, PokemonSelectedScreen } from "../components/pokemons";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <HomeScreen /> } />
                <Route path="pokemons/:pokSelect" element={ <PokemonSelectedScreen /> } />
                
            </Routes> 
        </BrowserRouter>
    )
}
