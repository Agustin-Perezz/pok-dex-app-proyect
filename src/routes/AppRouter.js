import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { HomeScreen, PokemonSelectedScreen } from "../components/pokemons";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={ <HomeScreen /> } />
                <Route path="pokemons/:pokSelect" element={ <PokemonSelectedScreen /> } />
                <Route path="*" element={ <HomeScreen /> } />
                
            </Routes> 
        </BrowserRouter>
    )
}
