import { PokemonProvider } from './contexts'
import { AppRoutes } from './routes/AppRoutes'

export const PokemonApp = () => {

   return (
        <div>
            <PokemonProvider>
                <AppRoutes />
            </PokemonProvider>
        </div>
    )
}
