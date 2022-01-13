import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import { HomeScreen } from "../components/pokemons/HomeScreen";
  
  export const DashBoardRoutes = () => {
      return (
          <>
            <Routes>

                <Route 
                    path="pokemons" 
                    element={ <HomeScreen /> } 
                />

                <Route path="/" element={ <HomeScreen /> } />

            </Routes> 
        </>
      )
  }
  