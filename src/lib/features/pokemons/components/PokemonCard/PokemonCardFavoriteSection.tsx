
import { HeartOutline } from '@/lib/config/icons';
import Link from 'next/link';
import React from 'react'

/// Definir que recibe este componente
interface PokemonCardFavoriteSectionProps {
    id: string
}


export const PokemonCardFavoriteSection = ( { id } : PokemonCardFavoriteSectionProps ) => {
  
return (<>
<div className="border-b">
    <Link 
        href={`/dashboard/pokemons/pokemon/${id}`} 
        className="px-4 py-2 hover:bg-gray-100 flex items-center"
    >
        <div className="text-red-600"><HeartOutline /></div>
        <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
            </p>
            <p className="text-xs text-gray-500">View your campaigns</p>
        </div>
    </Link>
</div>
</>)}