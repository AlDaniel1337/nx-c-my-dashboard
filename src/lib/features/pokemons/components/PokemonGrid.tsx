
import React from 'react'
import { SimplePokemon } from '../../../data/entities/SimplePokemon'
import { PokemonCard } from './PokemonCard/PokemonCard'

interface PokemonGridProps {
    pokemons: SimplePokemon[]
}

export const PokemonGrid = ( { pokemons } : PokemonGridProps ) => {
  
    return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        { pokemons.map( pokemon => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
        ))}
    </div>
    )
}