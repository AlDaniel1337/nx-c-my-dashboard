
import Link from 'next/link';
import React from 'react'
import { SimplePokemon } from '../../../../data/entities/SimplePokemon';
import { PokemonCardImage } from './PokemonCardImage'
import { HeartOutline } from '@/lib/config/icons';
import { PokemonCardFavoriteSection } from './PokemonCardFavoriteSection';

interface PokemonCardProps {
    pokemon: SimplePokemon
}


export const PokemonCard = ( { pokemon } : PokemonCardProps ) => {
  
    return (<>
    <div className="mx-auto right-0 mt-2 w-60">
        <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
            <PokemonCardImage pokemon={ pokemon } />
            <PokemonCardFavoriteSection id={ pokemon.id } />
        </div>
    </div>
    </>)
}