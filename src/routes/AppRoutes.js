import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path="/*" 
                    element={ <DashBoardRoutes /> } 
                />
                
            </Routes> 
        </BrowserRouter>
    )
}
