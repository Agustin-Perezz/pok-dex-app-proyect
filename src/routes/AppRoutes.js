import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { HomeScreen } from "../components/HomeScreen";
import { PokemonScreen } from "../components/PokemonScreen";
import { NotFoundScreen } from "../components/NotFoundScreen";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={ <HomeScreen /> } />
                <Route path="/pokemon" element={ <PokemonScreen /> } />

                <Route path="*" element={ <NotFoundScreen /> } />

            </Routes> 
        </BrowserRouter>
    )
}
