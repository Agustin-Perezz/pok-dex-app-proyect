import { PokemonList, PokemonSearchScreen } from '.';

export const HomeScreen = ({ defaultCategories = '' }) => {
    
    return (
        <div className='pokemon__home'>

            <PokemonSearchScreen  />
            <PokemonList />
            
        </div>
    )
}
